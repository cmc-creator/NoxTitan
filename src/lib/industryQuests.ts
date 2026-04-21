'use client';

// Industry-specific quest configurations
// Works for ANY business type - automatically generates relevant quests!

export const industryQuestTemplates = {
  healthcare: {
    name: 'Healthcare',
    icon: '⚕️',
    color: 'bg-[rgba(201,168,76,0.12)]',
    quests: [
      {
        title: 'Document Patient Encounters',
        taskType: 'documentation',
        goal: 5,
        xp: 25,
        gems: 5,
        difficulty: 'Common',
        description: 'Complete thorough documentation with quality notes',
        theme: 'You\'ve found ancient scrolls of healing knowledge!',
        category: 'Clinical'
      },
      {
        title: 'Perfect Medication Administration',
        taskType: 'patient-care',
        goal: 12,
        xp: 35,
        gems: 8,
        difficulty: 'Rare',
        description: 'Zero errors in med administration',
        theme: 'Each healing potion brewed brings you closer to mastery!',
        category: 'Clinical'
      },
      {
        title: 'Hand Hygiene Compliance',
        taskType: 'safety',
        goal: 8,
        xp: 20,
        gems: 4,
        difficulty: 'Uncommon',
        description: '100% compliance all shift',
        theme: 'The temple of health must remain purified!',
        category: 'Safety'
      },
    ]
  },

  construction: {
    name: 'Construction',
    icon: '🏗️',
    color: 'bg-[rgba(201,168,76,0.12)]',
    quests: [
      {
        title: 'Complete Safety Inspections',
        taskType: 'safety',
        goal: 3,
        xp: 30,
        gems: 6,
        difficulty: 'Uncommon',
        description: 'Pass all site safety checks',
        theme: 'Scout the construction site for hidden hazards - clear the path!',
        category: 'Safety'
      },
      {
        title: 'Finish Framing Section',
        taskType: 'production',
        goal: 4,
        xp: 50,
        gems: 10,
        difficulty: 'Epic',
        description: 'Complete 4 wall sections with quality work',
        theme: 'Build the fortress walls - 4 sections to complete the stronghold!',
        category: 'Production'
      },
      {
        title: 'Tool & Equipment Check',
        taskType: 'maintenance',
        goal: 1,
        xp: 15,
        gems: 3,
        difficulty: 'Common',
        description: 'Daily tool inspection and maintenance',
        theme: 'Sharpen your weapons before battle - check all equipment!',
        category: 'Equipment'
      },
      {
        title: 'Zero Rework Today',
        taskType: 'quality',
        goal: 1,
        xp: 40,
        gems: 8,
        difficulty: 'Rare',
        description: 'All work passes inspection first time',
        theme: 'The master craftsman\'s challenge - perfection on first attempt!',
        category: 'Quality'
      },
      {
        title: 'Train Apprentice',
        taskType: 'mentoring',
        goal: 3,
        xp: 35,
        gems: 7,
        difficulty: 'Uncommon',
        description: 'Teach 3 techniques to new crew member',
        theme: 'Pass the ancient building secrets to your apprentice!',
        category: 'Training'
      },
      {
        title: 'Material Efficiency',
        taskType: 'resource',
        goal: 1,
        xp: 25,
        gems: 5,
        difficulty: 'Uncommon',
        description: 'Under 5% material waste for the day',
        theme: 'Use resources wisely - every plank is precious treasure!',
        category: 'Efficiency'
      },
    ]
  },

  restaurant: {
    name: 'Restaurant',
    icon: '🍽️',
    color: 'bg-[rgba(201,168,76,0.12)]',
    quests: [
      {
        title: 'Perfect Table Service Rush',
        taskType: 'service',
        goal: 15,
        xp: 40,
        gems: 8,
        difficulty: 'Rare',
        description: 'Serve 15 tables during rush with zero complaints',
        theme: 'Navigate the dinner rush dungeon - 15 quests to conquer!',
        category: 'Service'
      },
      {
        title: 'Food Safety Excellence',
        taskType: 'safety',
        goal: 1,
        xp: 20,
        gems: 4,
        difficulty: 'Common',
        description: 'Perfect health & safety compliance all shift',
        theme: 'Guard the sacred kitchen - no contamination allowed!',
        category: 'Safety'
      },
      {
        title: 'Upsell Specials',
        taskType: 'sales',
        goal: 10,
        xp: 30,
        gems: 6,
        difficulty: 'Uncommon',
        description: 'Successfully recommend specials to 10 tables',
        theme: 'Discover hidden treasures - share them with guests!',
        category: 'Sales'
      },
      {
        title: 'Speed of Service',
        taskType: 'efficiency',
        goal: 8,
        xp: 35,
        gems: 7,
        difficulty: 'Rare',
        description: 'All meals served within 20 minutes',
        theme: 'Time trial challenge - deliver swiftly without error!',
        category: 'Efficiency'
      },
      {
        title: '5-Star Customer Reviews',
        taskType: 'satisfaction',
        goal: 5,
        xp: 50,
        gems: 10,
        difficulty: 'Epic',
        description: 'Earn 5 perfect customer reviews',
        theme: 'Legendary service - earn the crown of hospitality!',
        category: 'Customer Satisfaction'
      },
      {
        title: 'Zero Food Waste',
        taskType: 'sustainability',
        goal: 1,
        xp: 25,
        gems: 5,
        difficulty: 'Uncommon',
        description: 'Minimize food waste during prep & service',
        theme: 'The chef\'s honor - waste nothing, create everything!',
        category: 'Sustainability'
      },
      {
        title: 'Clean Station Inspection',
        taskType: 'cleanliness',
        goal: 1,
        xp: 15,
        gems: 3,
        difficulty: 'Common',
        description: 'Pass spot inspection with perfect score',
        theme: 'A spotless fortress is a safe fortress!',
        category: 'Cleanliness'
      },
    ]
  },

  retail: {
    name: 'Retail',
    icon: '🛍️',
    color: 'bg-[rgba(201,168,76,0.12)]',
    quests: [
      {
        title: 'Customer Service Excellence',
        taskType: 'service',
        goal: 20,
        xp: 30,
        gems: 6,
        difficulty: 'Uncommon',
        description: 'Help 20 customers with positive feedback',
        theme: 'Guide 20 adventurers to find their perfect treasure!',
        category: 'Customer Service'
      },
      {
        title: 'Sales Target Achievement',
        taskType: 'sales',
        goal: 1,
        xp: 50,
        gems: 10,
        difficulty: 'Epic',
        description: 'Hit or exceed daily sales goal',
        theme: 'Collect the legendary sales trophy - reach the summit!',
        category: 'Sales'
      },
      {
        title: 'Product Knowledge Master',
        taskType: 'training',
        goal: 5,
        xp: 25,
        gems: 5,
        difficulty: 'Uncommon',
        description: 'Correctly answer 5 product questions without looking up',
        theme: 'The wise merchant knows all secrets of their wares!',
        category: 'Knowledge'
      },
      {
        title: 'Stock & Merchandise Display',
        taskType: 'merchandising',
        goal: 3,
        xp: 20,
        gems: 4,
        difficulty: 'Common',
        description: 'Complete 3 display setups that pass inspection',
        theme: 'Arrange the treasure vault - entice all who enter!',
        category: 'Visual Merchandising'
      },
      {
        title: 'Loyalty Program Signups',
        taskType: 'marketing',
        goal: 10,
        xp: 35,
        gems: 7,
        difficulty: 'Rare',
        description: 'Sign up 10 new loyalty members',
        theme: 'Recruit 10 allies to join your guild!',
        category: 'Customer Loyalty'
      },
      {
        title: 'Loss Prevention Check',
        taskType: 'security',
        goal: 1,
        xp: 15,
        gems: 3,
        difficulty: 'Common',
        description: 'Complete theft prevention tasks with no incidents',
        theme: 'Guard the treasure room - let no thief pass!',
        category: 'Security'
      },
      {
        title: 'Returns & Exchanges',
        taskType: 'service',
        goal: 8,
        xp: 25,
        gems: 5,
        difficulty: 'Uncommon',
        description: 'Process 8+ returns with happy outcomes',
        theme: 'Turn complaints into compliments - master the art of resolution!',
        category: 'Problem Resolution'
      },
    ]
  },

  manufacturing: {
    name: 'Manufacturing',
    icon: '🏭',
    color: 'bg-[rgba(201,168,76,0.12)]',
    quests: [
      {
        title: 'Production Quota',
        taskType: 'production',
        goal: 100,
        xp: 40,
        gems: 8,
        difficulty: 'Rare',
        description: 'Meet or exceed 100 unit production target',
        theme: 'Forge 100 legendary items in the great workshop!',
        category: 'Production'
      },
      {
        title: 'Zero Defects Shift',
        taskType: 'quality',
        goal: 1,
        xp: 50,
        gems: 10,
        difficulty: 'Epic',
        description: 'All products pass quality inspection',
        theme: 'The perfectionist\'s challenge - no flawed items escape!',
        category: 'Quality Control'
      },
      {
        title: 'Safety Protocol Compliance',
        taskType: 'safety',
        goal: 1,
        xp: 20,
        gems: 4,
        difficulty: 'Common',
        description: 'Full PPE and safety procedure compliance',
        theme: 'Armor yourself properly - protection is power!',
        category: 'Safety'
      },
      {
        title: 'Machine Maintenance',
        taskType: 'maintenance',
        goal: 3,
        xp: 30,
        gems: 6,
        difficulty: 'Uncommon',
        description: 'Complete scheduled maintenance on 3 machines',
        theme: 'Keep the ancient machines running smoothly!',
        category: 'Equipment Maintenance'
      },
      {
        title: 'Efficiency Improvement',
        taskType: 'efficiency',
        goal: 1,
        xp: 35,
        gems: 7,
        difficulty: 'Rare',
        description: 'Reduce cycle time by 10% or more',
        theme: 'Discover the secret to faster production!',
        category: 'Process Improvement'
      },
    ]
  },

  hospitality: {
    name: 'Hospitality/Hotel',
    icon: '🏨',
    color: 'bg-[rgba(201,168,76,0.12)]',
    quests: [
      {
        title: 'Perfect Room Inspections',
        taskType: 'quality',
        goal: 12,
        xp: 35,
        gems: 7,
        difficulty: 'Uncommon',
        description: '12 rooms pass white-glove inspection',
        theme: 'Prepare 12 chambers fit for royalty!',
        category: 'Housekeeping'
      },
      {
        title: 'Guest Satisfaction',
        taskType: 'service',
        goal: 10,
        xp: 40,
        gems: 8,
        difficulty: 'Rare',
        description: 'Receive 10 positive guest reviews/comments',
        theme: 'Earn the praise of 10 noble guests!',
        category: 'Guest Services'
      },
      {
        title: 'Upsell Premium Services',
        taskType: 'sales',
        goal: 5,
        xp: 30,
        gems: 6,
        difficulty: 'Uncommon',
        description: 'Successfully upsell 5 room upgrades or services',
        theme: 'Reveal the hidden luxuries to your guests!',
        category: 'Revenue'
      },
      {
        title: 'Quick Check-in Service',
        taskType: 'efficiency',
        goal: 15,
        xp: 25,
        gems: 5,
        difficulty: 'Common',
        description: 'Check in 15 guests under 5 minutes each',
        theme: 'Welcome travelers swiftly to their sanctuary!',
        category: 'Front Desk'
      },
    ]
  },

  warehouse: {
    name: 'Warehouse/Logistics',
    icon: '📦',
    color: 'bg-[rgba(201,168,76,0.12)]',
    quests: [
      {
        title: 'Pick & Pack Orders',
        taskType: 'production',
        goal: 50,
        xp: 35,
        gems: 7,
        difficulty: 'Uncommon',
        description: 'Complete 50 orders with 100% accuracy',
        theme: 'Collect 50 treasures from the great vault!',
        category: 'Order Fulfillment'
      },
      {
        title: 'Zero Shipping Errors',
        taskType: 'quality',
        goal: 1,
        xp: 40,
        gems: 8,
        difficulty: 'Rare',
        description: 'All shipments accurate - no returns or corrections',
        theme: 'The master merchant makes no mistakes!',
        category: 'Accuracy'
      },
      {
        title: 'Forklift Safety Record',
        taskType: 'safety',
        goal: 1,
        xp: 20,
        gems: 4,
        difficulty: 'Common',
        description: 'Safe equipment operation all shift',
        theme: 'Command your mechanical beast without incident!',
        category: 'Equipment Safety'
      },
      {
        title: 'Inventory Count Accuracy',
        taskType: 'accuracy',
        goal: 100,
        xp: 30,
        gems: 6,
        difficulty: 'Uncommon',
        description: 'Count 100+ items with 99%+ accuracy',
        theme: 'Catalog the ancient treasures - every piece matters!',
        category: 'Inventory'
      },
      {
        title: 'Productivity Target',
        taskType: 'efficiency',
        goal: 1,
        xp: 45,
        gems: 9,
        difficulty: 'Epic',
        description: 'Exceed daily productivity standard by 20%',
        theme: 'Break the speed record - become legendary!',
        category: 'Performance'
      },
    ]
  },

  callcenter: {
    name: 'Call Center/Customer Support',
    icon: '📞',
    color: 'bg-[rgba(201,168,76,0.12)]',
    quests: [
      {
        title: 'Call Volume Champion',
        taskType: 'productivity',
        goal: 30,
        xp: 30,
        gems: 6,
        difficulty: 'Uncommon',
        description: 'Handle 30+ calls with quality scores',
        theme: 'Answer 30 calls for help from across the realm!',
        category: 'Call Volume'
      },
      {
        title: 'First Call Resolution',
        taskType: 'quality',
        goal: 10,
        xp: 40,
        gems: 8,
        difficulty: 'Rare',
        description: 'Resolve 10 issues without transfers or callbacks',
        theme: 'The master problem-solver needs no backup!',
        category: 'Resolution Rate'
      },
      {
        title: 'Customer Satisfaction Score',
        taskType: 'satisfaction',
        goal: 5,
        xp: 50,
        gems: 10,
        difficulty: 'Epic',
        description: 'Achieve 5/5 rating on 100% of surveyed calls',
        theme: 'Earn perfect reviews from all you serve!',
        category: 'CSAT'
      },
      {
        title: 'Average Handle Time',
        taskType: 'efficiency',
        goal: 1,
        xp: 25,
        gems: 5,
        difficulty: 'Uncommon',
        description: 'Stay under target AHT while maintaining quality',
        theme: 'Efficiency + Quality = The hero\'s way!',
        category: 'Efficiency'
      },
      {
        title: 'Upsell Success',
        taskType: 'sales',
        goal: 3,
        xp: 35,
        gems: 7,
        difficulty: 'Rare',
        description: 'Successfully upsell or cross-sell 3 times',
        theme: 'Reveal opportunities they didn\'t know they needed!',
        category: 'Sales'
      },
    ]
  },
};

// Function to get industry-specific quests
export function getIndustryQuests(industry: keyof typeof industryQuestTemplates) {
  return industryQuestTemplates[industry] || industryQuestTemplates.retail;
}

// Function to create custom industry quests
export function createCustomIndustryQuest(
  title: string,
  description: string,
  goal: number,
  category: string,
  theme: string,
  difficulty: 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary' = 'Common'
) {
  const xpMap = { Common: 15, Uncommon: 25, Rare: 35, Epic: 50, Legendary: 100 };
  const gemMap = { Common: 3, Uncommon: 5, Rare: 7, Epic: 10, Legendary: 20 };

  return {
    title,
    description,
    goal,
    xp: xpMap[difficulty],
    gems: gemMap[difficulty],
    difficulty,
    theme,
    category,
    progress: 0,
    icon: '⭐', // Can be customized
  };
}

// Real-world rewards that work across industries
export const universalRewards = {
  perks: [
    { name: 'Extended Break', cost: 50, icon: '☕', description: '+15 minutes break time' },
    { name: 'Preferred Parking', cost: 75, icon: '🅿️', description: 'Premium parking spot for a week' },
    { name: 'Early Shift Choice', cost: 100, icon: '📅', description: 'Pick your schedule first next week' },
    { name: 'Casual Dress Day', cost: 50, icon: '👕', description: 'Wear casual clothes (if applicable)' },
    { name: 'Late Start/Early Leave', cost: 150, icon: '⏰', description: 'Come in 30min late OR leave 30min early' },
  ],
  recognition: [
    { name: 'Employee of the Week', cost: 200, icon: '🏆', description: 'Featured recognition + photo' },
    { name: 'Manager Shoutout', cost: 100, icon: '📢', description: 'Personal recognition from leadership' },
    { name: 'Team Hero Badge', cost: 75, icon: '🦸', description: 'Displayed on your profile' },
  ],
  rewards: [
    { name: '$10 Gift Card', cost: 150, icon: '🎁', description: 'Coffee shop, restaurant, or retail' },
    { name: '$25 Gift Card', cost: 250, icon: '🎁', description: 'Your choice of store' },
    { name: '$50 Gift Card', cost: 450, icon: '🎁', description: 'Major retailer or restaurant' },
    { name: 'Company Swag', cost: 100, icon: '👕', description: 'Branded hoodie, hat, or gear' },
    { name: 'Team Lunch', cost: 500, icon: '🍕', description: 'Lunch for your whole team' },
    { name: 'Extra PTO Hour', cost: 200, icon: '🏖️', description: '1 hour added to PTO bank' },
    { name: 'Half Day PTO', cost: 400, icon: '🏖️', description: '4 hours PTO' },
  ],
  exclusive: [
    { name: 'Lunch with CEO', cost: 1000, icon: '🍽️', description: 'One-on-one lunch with leadership' },
    { name: 'Reserved Spot (Month)', cost: 800, icon: '🅿️', description: 'Premium parking all month' },
    { name: 'Professional Development', cost: 600, icon: '📚', description: '$100 toward training/certification' },
    { name: 'Bonus PTO Day', cost: 1000, icon: '🌴', description: 'Full extra day off' },
  ],
};
