import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { platform, storeUrl, apiKey, apiSecret } = await request.json();

    if (!platform || !apiKey) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Test connection based on platform
    let result;
    switch (platform) {
      case 'PRINTFUL':
        result = await testPrintful(apiKey);
        break;
      case 'WIX':
        result = await testWix(storeUrl, apiKey);
        break;
      case 'SHOPIFY':
        result = await testShopify(storeUrl, apiKey);
        break;
      case 'WOOCOMMERCE':
        result = await testWooCommerce(storeUrl, apiKey, apiSecret);
        break;
      case 'SQUARE':
        result = await testSquare(apiKey);
        break;
      case 'ETSY':
        result = await testEtsy(apiKey, apiSecret);
        break;
      default:
        return NextResponse.json({
          success: false,
          message: 'Platform not supported yet',
        });
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error('Connection test failed:', error);
    return NextResponse.json({
      success: false,
      message: 'Connection test failed. Please check your credentials.',
    });
  }
}

async function testPrintful(apiKey: string) {
  try {
    // Test Printful API
    const response = await fetch('https://api.printful.com/store', {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      return {
        success: true,
        message: `Connected to Printful store: ${data.result?.name || 'Store'}`,
      };
    }

    return {
      success: false,
      message: 'Invalid Printful API key',
    };
  } catch (error) {
    return {
      success: false,
      message: 'Failed to connect to Printful. Check your API key.',
    };
  }
}

async function testWix(storeUrl: string, apiKey: string) {
  try {
    // Test Wix API
    const response = await fetch('https://www.wixapis.com/stores/v1/products/query', {
      method: 'POST',
      headers: {
        'Authorization': apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: { limit: 1 } }),
    });

    if (response.ok) {
      return {
        success: true,
        message: `Connected to Wix store successfully`,
      };
    }

    return {
      success: false,
      message: 'Invalid Wix API credentials',
    };
  } catch (error) {
    return {
      success: false,
      message: 'Failed to connect to Wix. Check your API key.',
    };
  }
}

async function testShopify(storeUrl: string, apiKey: string) {
  try {
    // Test Shopify API
    const cleanUrl = storeUrl.replace(/^https?:\/\//, '').replace(/\/$/, '');
    const response = await fetch(`https://${cleanUrl}/admin/api/2024-01/shop.json`, {
      headers: {
        'X-Shopify-Access-Token': apiKey,
      },
    });

    if (response.ok) {
      const data = await response.json();
      return {
        success: true,
        message: `Connected to Shopify store: ${data.shop?.name || 'Store'}`,
      };
    }

    return {
      success: false,
      message: 'Invalid Shopify credentials',
    };
  } catch (error) {
    return {
      success: false,
      message: 'Failed to connect to Shopify. Check your store URL and access token.',
    };
  }
}

async function testWooCommerce(storeUrl: string, apiKey: string, apiSecret: string) {
  try {
    // Test WooCommerce API
    const cleanUrl = storeUrl.replace(/\/$/, '');
    const auth = Buffer.from(`${apiKey}:${apiSecret}`).toString('base64');
    
    const response = await fetch(`${cleanUrl}/wp-json/wc/v3/system_status`, {
      headers: {
        'Authorization': `Basic ${auth}`,
      },
    });

    if (response.ok) {
      return {
        success: true,
        message: `Connected to WooCommerce store successfully`,
      };
    }

    return {
      success: false,
      message: 'Invalid WooCommerce credentials',
    };
  } catch (error) {
    return {
      success: false,
      message: 'Failed to connect to WooCommerce. Check your credentials and store URL.',
    };
  }
}

async function testSquare(apiKey: string) {
  try {
    // Test Square API
    const response = await fetch('https://connect.squareup.com/v2/locations', {
      headers: {
        'Square-Version': '2024-01-18',
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      return {
        success: true,
        message: `Connected to Square successfully`,
      };
    }

    return {
      success: false,
      message: 'Invalid Square access token',
    };
  } catch (error) {
    return {
      success: false,
      message: 'Failed to connect to Square. Check your access token.',
    };
  }
}

async function testEtsy(apiKey: string, apiSecret: string) {
  // Etsy requires OAuth flow, so for now we'll just validate the format
  if (apiKey && apiSecret) {
    return {
      success: true,
      message: 'Etsy credentials saved. Complete OAuth flow to activate.',
    };
  }

  return {
    success: false,
    message: 'Etsy API key and secret required',
  };
}
