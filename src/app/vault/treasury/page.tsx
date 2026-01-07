'use client';

import { useState, useRef, useEffect } from 'react';
import { Package, User, DollarSign, FileSignature, Clock, AlertTriangle, CheckCircle, X } from 'lucide-react';
import SignatureCanvas from 'react-signature-canvas';

interface Asset {
  id: string;
  assetTag: string;
  name: string;
  description?: string;
  category: { name: string; icon?: string };
  currentValue?: number;
  serialNumber?: string;
}

interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  employeeId: string;
}

export default function TreasuryPage() {
  const [step, setStep] = useState<'select-asset' | 'select-employee' | 'sign'>('select-asset');
  const [assets, setAssets] = useState<Asset[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [expectedReturn, setExpectedReturn] = useState('');
  const [notes, setNotes] = useState('');
  const [acknowledged, setAcknowledged] = useState(false);
  const [loading, setLoading] = useState(false);
  const signatureRef = useRef<SignatureCanvas>(null);

  useEffect(() => {
    fetchAvailableAssets();
    fetchEmployees();
  }, []);

  async function fetchAvailableAssets() {
    try {
      const response = await fetch('/api/assets?status=AVAILABLE');
      if (response.ok) {
        const data = await response.json();
        setAssets(data);
      }
    } catch (error) {
      console.error('Failed to fetch assets:', error);
    }
  }

  async function fetchEmployees() {
    try {
      const response = await fetch('/api/employees');
      if (response.ok) {
        const data = await response.json();
        setEmployees(data);
      }
    } catch (error) {
      console.error('Failed to fetch employees:', error);
    }
  }

  function clearSignature() {
    signatureRef.current?.clear();
  }

  async function handleSubmit() {
    if (!signatureRef.current?.isEmpty()) {
      setLoading(true);
      try {
        const signatureData = signatureRef.current?.toDataURL();
        
        const response = await fetch('/api/assets/treasury/checkout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            assetId: selectedAsset?.id,
            employeeId: selectedEmployee?.id,
            expectedReturnDate: expectedReturn,
            notes,
            digitalSignature: signatureData,
            acknowledgedValue: selectedAsset?.currentValue || 0,
          }),
        });

        if (response.ok) {
          alert('✅ Asset checked out successfully! Employee digitally signed.');
          // Reset
          setStep('select-asset');
          setSelectedAsset(null);
          setSelectedEmployee(null);
          setExpectedReturn('');
          setNotes('');
          setAcknowledged(false);
          clearSignature();
          fetchAvailableAssets();
        } else {
          alert('❌ Failed to check out asset');
        }
      } catch (error) {
        console.error('Checkout failed:', error);
        alert('❌ Error during checkout');
      } finally {
        setLoading(false);
      }
    } else {
      alert('⚠️ Signature required!');
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
            <FileSignature className="w-10 h-10 text-purple-400" />
            Treasury - Digital Asset Checkout
          </h1>
          <p className="text-slate-400">Employees digitally sign for assets with automatic payroll tracking</p>
        </div>

        {/* Progress Steps */}
        <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className={`flex items-center gap-3 ${step === 'select-asset' ? 'text-purple-400' : 'text-slate-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step === 'select-asset' ? 'border-purple-400 bg-purple-500/20' : 'border-slate-600'}`}>
                1
              </div>
              <span className="font-semibold">Select Asset</span>
            </div>
            <div className="flex-1 h-0.5 mx-4 bg-slate-700"></div>
            <div className={`flex items-center gap-3 ${step === 'select-employee' ? 'text-purple-400' : 'text-slate-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step === 'select-employee' ? 'border-purple-400 bg-purple-500/20' : 'border-slate-600'}`}>
                2
              </div>
              <span className="font-semibold">Select Employee</span>
            </div>
            <div className="flex-1 h-0.5 mx-4 bg-slate-700"></div>
            <div className={`flex items-center gap-3 ${step === 'sign' ? 'text-purple-400' : 'text-slate-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step === 'sign' ? 'border-purple-400 bg-purple-500/20' : 'border-slate-600'}`}>
                3
              </div>
              <span className="font-semibold">Digital Signature</span>
            </div>
          </div>
        </div>

        {/* Step 1: Select Asset */}
        {step === 'select-asset' && (
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Select Asset to Check Out</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {assets.map((asset) => (
                <div
                  key={asset.id}
                  onClick={() => {
                    setSelectedAsset(asset);
                    setStep('select-employee');
                  }}
                  className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 hover:border-purple-500 cursor-pointer transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{asset.category.icon || '📦'}</span>
                    <div>
                      <h3 className="font-bold text-white">{asset.name}</h3>
                      <p className="text-sm text-slate-400">{asset.assetTag}</p>
                    </div>
                  </div>
                  {asset.currentValue && (
                    <div className="flex items-center gap-2 text-green-400">
                      <DollarSign className="w-4 h-4" />
                      <span className="font-bold">${asset.currentValue.toLocaleString()}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Select Employee */}
        {step === 'select-employee' && selectedAsset && (
          <div>
            <div className="bg-slate-800/50 backdrop-blur border border-purple-500 rounded-xl p-4 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-white">Selected Asset: {selectedAsset.name}</h3>
                  <p className="text-sm text-slate-400">{selectedAsset.assetTag} - ${selectedAsset.currentValue?.toLocaleString()}</p>
                </div>
                <button
                  onClick={() => setStep('select-asset')}
                  className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
                >
                  Change Asset
                </button>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">Select Employee</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {employees.map((emp) => (
                <div
                  key={emp.id}
                  onClick={() => {
                    setSelectedEmployee(emp);
                    setStep('sign');
                  }}
                  className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 hover:border-purple-500 cursor-pointer transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{emp.firstName} {emp.lastName}</h3>
                      <p className="text-sm text-slate-400">{emp.employeeId} - {emp.email}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Digital Signature */}
        {step === 'sign' && selectedAsset && selectedEmployee && (
          <div>
            <div className="bg-slate-800/50 backdrop-blur border border-purple-500 rounded-xl p-6 mb-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm text-slate-400 mb-1">Asset</h4>
                  <h3 className="font-bold text-white text-lg">{selectedAsset.name}</h3>
                  <p className="text-slate-400">{selectedAsset.assetTag}</p>
                </div>
                <div>
                  <h4 className="text-sm text-slate-400 mb-1">Employee</h4>
                  <h3 className="font-bold text-white text-lg">{selectedEmployee.firstName} {selectedEmployee.lastName}</h3>
                  <p className="text-slate-400">{selectedEmployee.employeeId}</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 mb-6">
              <div className="mb-4">
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  Expected Return Date
                </label>
                <input
                  type="date"
                  value={expectedReturn}
                  onChange={(e) => setExpectedReturn(e.target.value)}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-purple-500"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  Notes
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-purple-500"
                  placeholder="Any special instructions or notes..."
                />
              </div>

              {/* Acknowledgment */}
              <div className="bg-orange-500/10 border border-orange-500/50 rounded-lg p-4 mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h4 className="font-bold text-orange-300 mb-2">Asset Responsibility Agreement</h4>
                    <p className="text-sm text-orange-200 mb-3">
                      I acknowledge that I am receiving <strong>{selectedAsset.name}</strong> (Asset Tag: {selectedAsset.assetTag}) 
                      with an estimated value of <strong>${selectedAsset.currentValue?.toLocaleString()}</strong>.
                    </p>
                    <p className="text-sm text-orange-200 mb-3">
                      I agree to:
                      • Use this asset responsibly and for work purposes only
                      • Return it by the expected return date in good condition
                      • Report any damage or loss immediately
                    </p>
                    <p className="text-sm text-orange-200 mb-4">
                      <strong>⚠️ IMPORTANT:</strong> If I fail to return this asset or return it damaged, 
                      I authorize automatic payroll deduction up to the full replacement value.
                    </p>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={acknowledged}
                        onChange={(e) => setAcknowledged(e.target.checked)}
                        className="w-5 h-5 accent-purple-500"
                      />
                      <span className="text-white font-semibold">
                        I understand and agree to these terms
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Signature Pad */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-semibold text-slate-300">
                    Digital Signature
                  </label>
                  <button
                    onClick={clearSignature}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    Clear Signature
                  </button>
                </div>
                <div className="border-2 border-slate-600 rounded-lg bg-white">
                  <SignatureCanvas
                    ref={signatureRef}
                    canvasProps={{
                      className: 'w-full h-48 rounded-lg',
                    }}
                  />
                </div>
                <p className="text-xs text-slate-500 mt-2">Sign above with your mouse or touchscreen</p>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setStep('select-employee')}
                  className="flex-1 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={!acknowledged || loading}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Processing...' : 'Complete Checkout'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
