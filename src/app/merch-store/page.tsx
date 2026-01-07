'use client';

import { useState, useEffect } from 'react';
import { ShoppingBag, Zap, DollarSign, Package, Truck, CreditCard, Award, ShoppingCart } from 'lucide-react';

interface MerchItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  imageUrl?: string;
  category?: string;
  redeemableWithXP: boolean;
  xpCost?: number;
  stockQuantity?: number;
  store: {
    name: string;
    platform: string;
  };
}

interface CartItem {
  item: MerchItem;
  quantity: number;
  variant?: any;
}

interface GuildProfile {
  totalXP: number;
  levelName: string;
}

export default function MerchStorePage() {
  const [items, setItems] = useState<MerchItem[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [guildProfile, setGuildProfile] = useState<GuildProfile | null>(null);
  const [selectedEmployee, setSelectedEmployee] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<'PAYROLL_DEDUCTION' | 'GUILD_XP'>('PAYROLL_DEDUCTION');
  const [loading, setLoading] = useState(true);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  useEffect(() => {
    fetchMerchItems();
  }, []);

  useEffect(() => {
    if (selectedEmployee) {
      fetchGuildProfile();
    }
  }, [selectedEmployee]);

  async function fetchMerchItems() {
    try {
      const response = await fetch('/api/merch/items');
      if (response.ok) {
        const data = await response.json();
        setItems(data);
      }
    } catch (error) {
      console.error('Failed to fetch merch items:', error);
    } finally {
      setLoading(false);
    }
  }

  async function fetchGuildProfile() {
    try {
      const response = await fetch(`/api/guild/profile?employeeId=${selectedEmployee}`);
      if (response.ok) {
        const data = await response.json();
        setGuildProfile(data);
      }
    } catch (error) {
      console.error('Failed to fetch guild profile:', error);
    }
  }

  function addToCart(item: MerchItem) {
    setCart(prev => {
      const existing = prev.find(c => c.item.id === item.id);
      if (existing) {
        return prev.map(c =>
          c.item.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  }

  function removeFromCart(itemId: string) {
    setCart(prev => prev.filter(c => c.item.id !== itemId));
  }

  function updateQuantity(itemId: string, quantity: number) {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCart(prev =>
      prev.map(c => (c.item.id === itemId ? { ...c, quantity } : c))
    );
  }

  async function checkout() {
    if (!selectedEmployee) {
      alert('Please select an employee');
      return;
    }

    if (cart.length === 0) {
      alert('Cart is empty');
      return;
    }

    const total = getCartTotal();
    const totalXP = getCartXP();

    if (paymentMethod === 'GUILD_XP' && guildProfile && totalXP > guildProfile.totalXP) {
      alert('Insufficient XP! You need ' + totalXP + ' but only have ' + guildProfile.totalXP);
      return;
    }

    try {
      const response = await fetch('/api/merch/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          employeeId: selectedEmployee,
          paymentMethod,
          items: cart.map(c => ({
            itemId: c.item.id,
            quantity: c.quantity,
            variantInfo: c.variant,
          })),
        }),
      });

      if (response.ok) {
        alert('🎉 Order placed successfully!');
        setCart([]);
        setCheckoutOpen(false);
        fetchGuildProfile(); // Refresh XP balance
      } else {
        const error = await response.json();
        alert('Order failed: ' + error.error);
      }
    } catch (error) {
      console.error('Checkout failed:', error);
      alert('Checkout failed');
    }
  }

  function getCartTotal(): number {
    return cart.reduce((sum, c) => sum + c.item.price * c.quantity, 0);
  }

  function getCartXP(): number {
    return cart.reduce((sum, c) => {
      if (paymentMethod === 'GUILD_XP' && c.item.redeemableWithXP && c.item.xpCost) {
        return sum + c.item.xpCost * c.quantity;
      }
      return sum;
    }, 0);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block relative mb-6">
            <div className="absolute inset-0 bg-pink-500 blur-3xl opacity-50 animate-pulse"></div>
            <ShoppingBag className="w-20 h-20 text-pink-300 relative" />
          </div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 mb-4">
            Merch Store
          </h1>
          <p className="text-xl text-purple-200 mb-6">
            Pay with Payroll Deduction OR Guild XP Rewards
          </p>
        </div>

        {/* Cart Summary & Payment Method */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <ShoppingCart className="w-6 h-6 text-pink-400" />
              <span className="text-white font-bold">
                Cart: {cart.length} items
              </span>
              {cart.length > 0 && (
                <button
                  onClick={() => setCheckoutOpen(!checkoutOpen)}
                  className="px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-lg transition-colors"
                >
                  {checkoutOpen ? 'Continue Shopping' : 'View Cart'}
                </button>
              )}
            </div>

            <div className="flex items-center gap-4">
              {guildProfile && (
                <div className="text-right">
                  <div className="text-2xl font-bold text-yellow-400">
                    {guildProfile.totalXP.toLocaleString()} XP
                  </div>
                  <div className="text-xs text-slate-400">Available</div>
                </div>
              )}

              <div className="flex gap-2">
                <button
                  onClick={() => setPaymentMethod('PAYROLL_DEDUCTION')}
                  className={`px-4 py-2 rounded-lg font-bold flex items-center gap-2 transition-all ${
                    paymentMethod === 'PAYROLL_DEDUCTION'
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  <DollarSign className="w-4 h-4" />
                  Payroll
                </button>
                <button
                  onClick={() => setPaymentMethod('GUILD_XP')}
                  className={`px-4 py-2 rounded-lg font-bold flex items-center gap-2 transition-all ${
                    paymentMethod === 'GUILD_XP'
                      ? 'bg-purple-600 text-white'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  <Zap className="w-4 h-4" />
                  Guild XP
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Cart Checkout */}
        {checkoutOpen && cart.length > 0 && (
          <div className="bg-slate-800 border-2 border-pink-500 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Your Cart</h2>
            <div className="space-y-3 mb-6">
              {cart.map(cartItem => (
                <div key={cartItem.item.id} className="flex items-center justify-between bg-slate-700/50 rounded-lg p-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-slate-600 rounded-lg flex items-center justify-center">
                      {cartItem.item.imageUrl ? (
                        <img src={cartItem.item.imageUrl} alt={cartItem.item.name} className="w-full h-full object-cover rounded-lg" />
                      ) : (
                        <Package className="w-8 h-8 text-slate-400" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-white font-bold">{cartItem.item.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-slate-400">
                        {paymentMethod === 'GUILD_XP' && cartItem.item.redeemableWithXP ? (
                          <span className="text-yellow-400 font-bold">{cartItem.item.xpCost} XP each</span>
                        ) : (
                          <span className="text-green-400 font-bold">${cartItem.item.price.toFixed(2)} each</span>
                        )}
                        <input
                          type="number"
                          min="1"
                          value={cartItem.quantity}
                          onChange={(e) => updateQuantity(cartItem.item.id, parseInt(e.target.value))}
                          className="w-16 px-2 py-1 bg-slate-600 text-white rounded"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    {paymentMethod === 'GUILD_XP' && cartItem.item.redeemableWithXP ? (
                      <div className="text-xl font-bold text-yellow-400">
                        {(cartItem.item.xpCost! * cartItem.quantity).toLocaleString()} XP
                      </div>
                    ) : (
                      <div className="text-xl font-bold text-green-400">
                        ${(cartItem.item.price * cartItem.quantity).toFixed(2)}
                      </div>
                    )}
                    <button
                      onClick={() => removeFromCart(cartItem.item.id)}
                      className="text-xs text-red-400 hover:text-red-300 mt-1"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-700 pt-4 mb-6">
              <div className="flex justify-between items-center text-2xl font-bold text-white">
                <span>Total:</span>
                {paymentMethod === 'GUILD_XP' ? (
                  <span className="text-yellow-400">{getCartXP().toLocaleString()} XP</span>
                ) : (
                  <span className="text-green-400">${getCartTotal().toFixed(2)}</span>
                )}
              </div>
              {paymentMethod === 'PAYROLL_DEDUCTION' && (
                <p className="text-sm text-slate-400 mt-2">
                  Amount will be deducted from your next paycheck
                </p>
              )}
            </div>

            <button
              onClick={checkout}
              disabled={!selectedEmployee}
              className="w-full px-6 py-4 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-bold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              <CreditCard className="w-6 h-6" />
              Complete Order
            </button>
          </div>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map(item => (
            <div key={item.id} className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden hover:border-pink-500/50 transition-all">
              <div className="aspect-square bg-slate-700 flex items-center justify-center">
                {item.imageUrl ? (
                  <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                ) : (
                  <Package className="w-16 h-16 text-slate-500" />
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-white mb-2">{item.name}</h3>
                {item.description && (
                  <p className="text-sm text-slate-400 mb-3 line-clamp-2">{item.description}</p>
                )}
                
                <div className="flex items-center justify-between mb-4">
                  {paymentMethod === 'GUILD_XP' && item.redeemableWithXP ? (
                    <div className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-yellow-400" />
                      <span className="text-xl font-bold text-yellow-400">{item.xpCost}</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-green-400" />
                      <span className="text-xl font-bold text-green-400">{item.price.toFixed(2)}</span>
                    </div>
                  )}
                  {item.stockQuantity !== null && item.stockQuantity !== undefined && (
                    <span className="text-xs text-slate-400">{item.stockQuantity} left</span>
                  )}
                </div>

                <button
                  onClick={() => addToCart(item)}
                  disabled={item.stockQuantity !== null && item.stockQuantity !== undefined && item.stockQuantity <= 0}
                  className="w-full px-4 py-2 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-bold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Add to Cart
                </button>

                {item.redeemableWithXP && (
                  <div className="flex items-center gap-1 justify-center mt-2 text-xs text-yellow-400">
                    <Award className="w-3 h-3" />
                    <span>XP Redeemable</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {items.length === 0 && !loading && (
          <div className="text-center py-20">
            <Package className="w-20 h-20 text-slate-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">No Items Available</h3>
            <p className="text-slate-400">Check back later for new merch!</p>
          </div>
        )}
      </div>
    </div>
  );
}
