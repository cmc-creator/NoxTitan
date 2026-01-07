import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

// This is a simple AI assistant API
// For production, integrate with OpenAI, Anthropic, or your preferred LLM

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { message, context, userRole, conversationHistory } = await request.json();

    // Smart contextual responses based on user's current page/action
    const response = generateContextualResponse(message, context, userRole);

    return NextResponse.json({ response });
  } catch (error) {
    console.error('AI Assistant error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}

function generateContextualResponse(message: string, context: string, userRole: string): string {
  const lowerMessage = message.toLowerCase();

  // Proactive HR-specific suggestions
  if (userRole === 'hr') {
    // Check-in related
    if (lowerMessage.includes('check-in') || lowerMessage.includes('check in') || lowerMessage.includes('checkin')) {
      return "I can help you schedule manager check-ins! Go to the HR Planner and I'll guide you through:\n\n1. Setting up recurring 1-on-1s\n2. Creating check-in templates\n3. Tracking completion rates\n4. Sending automated reminders\n\nWould you like me to create a check-in schedule for a specific team or manager?";
    }

    // Survey related
    if (lowerMessage.includes('survey') || lowerMessage.includes('satisfaction') || lowerMessage.includes('30') || lowerMessage.includes('60') || lowerMessage.includes('90')) {
      return "Great question! For employee satisfaction surveys, I recommend:\n\n📋 30-Day Survey: Focus on onboarding experience\n📋 60-Day Survey: Check role clarity and team integration\n📋 90-Day Survey: Assess job satisfaction and growth opportunities\n\nI can automatically schedule these for all new hires! The system will:\n- Send surveys at the right milestones\n- Track completion rates\n- Generate satisfaction reports\n- Alert you to concerning scores\n\nWant me to set this up for you?";
    }

    // Automation related
    if (lowerMessage.includes('automat') || lowerMessage.includes('remind') || lowerMessage.includes('schedule')) {
      return "Let me show you some powerful automation options:\n\n🤖 Automated Workflows:\n• New hire onboarding checklists\n• Performance review reminders\n• Survey scheduling (30/60/90 days)\n• Check-in reminders for managers\n• Anniversary & birthday notifications\n• Document collection reminders\n\nI can set these up to run automatically based on hire dates, anniversaries, or custom triggers. Which automation interests you most?";
    }

    // Onboarding related
    if (lowerMessage.includes('onboard') || lowerMessage.includes('new hire')) {
      return "Onboarding automation is one of my favorite features! Here's what I can set up:\n\n✨ Day 1: Welcome email + system access\n✨ Week 1: Equipment assignment + buddy introduction\n✨ Week 2: Training schedule + first check-in\n✨30 Days: First satisfaction survey\n✨ 60 Days: Progress review\n✨ 90 Days: Full performance review\n\nI'll automatically create tasks for HR, IT, managers, and the new hire. Want to customize this workflow?";
    }

    // Performance review related
    if (lowerMessage.includes('review') || lowerMessage.includes('performance') || lowerMessage.includes('evaluation')) {
      return "Performance reviews made easy! I can help you:\n\n⭐ Set up review cycles (quarterly, annual)\n⭐ Send automated reminders to managers\n⭐ Track completion status\n⭐ Generate performance reports\n⭐ Create goal-setting templates\n⭐ Schedule follow-up meetings\n\nThe system supports 360-degree reviews, self-assessments, and manager evaluations. Ready to set up your next review cycle?";
    }

    // Reporting/Analytics
    if (lowerMessage.includes('report') || lowerMessage.includes('analytic') || lowerMessage.includes('data') || lowerMessage.includes('metric')) {
      return "TeamPulse has powerful analytics! I can show you:\n\n📊 Employee engagement trends\n📊 Turnover predictions (based on survey scores)\n📊 Manager effectiveness metrics\n📊 Time-to-fill for open positions\n📊 Training completion rates\n📊 Compliance violation patterns\n\nWhich metrics are most important for your organization?";
    }
  }

  // General helpful responses
  if (lowerMessage.includes('help') || lowerMessage.includes('how') || lowerMessage.includes('what')) {
    return `I'm here to help! Based on where you are (${context}), here are some things I can do:\n\n• Guide you through any feature\n• Set up automation workflows\n• Schedule tasks and reminders\n• Answer questions about HR processes\n• Generate reports and insights\n• Provide best practice recommendations\n\nWhat specific task are you trying to accomplish?`;
  }

  if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
    return "You're very welcome! I'm always here if you need anything else. 😊";
  }

  // Default intelligent response
  return `I understand you're asking about: "${message}"\n\nHere are some related features that might help:\n\n• HR Planner - Schedule tasks and reminders\n• Employee Surveys - Track satisfaction scores\n• Automation Rules - Set up recurring workflows\n• Performance Reviews - Manage review cycles\n• Analytics Dashboard - View HR metrics\n\nCould you provide more details about what you'd like to do? I'm here to make your HR work easier!`;
}
