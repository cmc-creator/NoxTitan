# Survey Integration & Forms System - Setup Guide

## Overview
NyxTitan now includes a comprehensive survey integration system that connects with popular survey platforms and provides a custom form builder for creating internal forms and templates.

## Features

### 1. **Survey Platform Integrations**
Connect with industry-leading survey platforms for real-time data sync:

#### Supported Platforms
- **SurveyMonkey** 📊 - Professional surveys with advanced analytics
- **Microsoft Forms** 📝 - Integrated with Microsoft 365
- **Google Forms** 📋 - Simple surveys with Google Workspace integration
- **Typeform** ✨ - Beautiful, conversational forms

#### Real-Time Data Sync
- Webhook support for instant response updates
- Configurable sync frequency (5, 15, 30, 60 minutes)
- Automatic response import and categorization
- Sentiment analysis (positive, neutral, negative)

#### Survey Types Supported
- Patient Satisfaction Surveys
- Employee Engagement Surveys
- Culture of Safety Surveys
- Training Evaluation
- Exit Interviews
- Onboarding Feedback
- Incident Reports
- Performance Reviews
- Custom Surveys

### 2. **Custom Form Builder**
Create internal forms with a drag-and-drop interface:

#### Available Field Types (14 total)
1. **Short Text** - Single-line text input
2. **Long Text** - Multi-line textarea
3. **Number** - Numeric input with validation
4. **Email** - Email address with validation
5. **Phone** - Phone number field
6. **URL** - Website link field
7. **Date** - Calendar date picker
8. **Dropdown** - Single selection from list
9. **Multi-Select** - Multiple selections
10. **Checkboxes** - Multiple checkbox options
11. **Radio Buttons** - Single selection with visual buttons
12. **File Upload** - Document/image uploads
13. **Star Rating** - 1-5 star ratings
14. **Signature** - Digital signature capture

#### Form Features
- **Live Preview** - See exactly how your form will look
- **Field Properties** - Configure labels, placeholders, help text, validation
- **Required Fields** - Mark fields as mandatory
- **Custom Options** - Add dropdown/radio/checkbox options
- **Category Organization** - Organize by HR, Compliance, Training, etc.
- **Permission Controls** - Set who can view, edit, and approve submissions
- **Anonymous Submissions** - Allow optional anonymous responses
- **Manager Approval** - Require manager sign-off
- **Email Notifications** - Automatic confirmation emails

### 3. **Form Template Library**
Share and reuse forms across your organization:

#### Template Management
- **Public Templates** - Share across all departments
- **Private Templates** - Personal or team-specific forms
- **Usage Tracking** - See how many times templates are used
- **Version Control** - Track form changes over time
- **Submission Analytics** - View response counts and trends

#### Pre-Built Templates (Examples)
- Patient Satisfaction Survey
- Incident Report Form
- Time Off Request
- Employee Onboarding Feedback
- Training Evaluation
- Exit Interview

### 4. **Survey Analytics Dashboard**
Real-time insights from all connected surveys:

#### Analytics Features
- **Response Tracking** - Total responses across all platforms
- **Average Scores** - Calculate mean satisfaction scores
- **Sentiment Analysis** - Automatic positive/neutral/negative classification
- **Trend Detection** - Identify improving or declining metrics
- **Theme Extraction** - Common feedback themes auto-tagged
- **Action Items** - AI-generated recommended actions based on feedback
- **Export Reports** - Download analytics as PDF or CSV

#### Dashboard Views
- Overview stats (total responses, average scores, sentiment breakdown)
- Per-survey breakdowns with individual metrics
- Trend indicators (up, down, stable)
- Common feedback themes
- Recommended actions with priority levels

---

## Setup Instructions

### Step 1: Access Integration Settings
1. Navigate to **Settings** > **Integrations** > **Survey Integrations**
2. Or go directly to: `/integrations/surveys`

### Step 2: Connect Survey Platform

#### For SurveyMonkey:
1. Log in to your SurveyMonkey account
2. Go to **Settings** > **API & Webhooks**
3. Click **Generate API Key**
4. Copy the API key
5. In NyxTitan, click **Connect SurveyMonkey**
6. Paste your API key
7. Copy the webhook URL provided: `https://nox-titan.vercel.app/api/webhooks/surveymonkey`
8. In SurveyMonkey, add this webhook URL to enable real-time sync
9. Click **Connect Integration**

#### For Microsoft Forms:
1. Click **Connect Microsoft Forms** in NyxTitan
2. Sign in with your Microsoft 365 account
3. Authorize NyxTitan to access Forms
4. Select which forms to sync
5. Configure sync frequency
6. Click **Connect Integration**

#### For Google Forms:
1. Click **Connect Google Forms** in NyxTitan
2. Sign in with your Google Workspace account
3. Grant permission to read Forms responses
4. Enable Google Sheets integration
5. Set automatic sync schedule
6. Click **Connect Integration**

#### For Typeform:
1. Log in to your Typeform account
2. Navigate to **Settings** > **Webhooks**
3. Create new webhook pointing to: `https://nox-titan.vercel.app/api/webhooks/typeform`
4. Copy your API token from Typeform settings
5. In NyxTitan, click **Connect Typeform**
6. Paste API token
7. Click **Connect Integration**

### Step 3: Map Surveys to Categories
Once connected, map your external surveys to internal categories:
1. Go to **Forms & Surveys** > **Survey Mappings**
2. For each imported survey, assign a type:
   - Patient Satisfaction
   - Employee Engagement
   - Culture of Safety
   - Training Evaluation
   - etc.
3. Configure field mappings if needed
4. Enable auto-import

### Step 4: Create Custom Forms
1. Navigate to **Forms & Surveys** > **Create New Form**
2. Enter form name and description
3. Select category (HR, Compliance, Training, etc.)
4. Drag field types from the left panel onto the canvas
5. Click fields to configure properties:
   - Label
   - Placeholder text
   - Help text
   - Required/optional
   - Validation rules
   - Options (for dropdowns/radios)
6. Click **Preview** to test your form
7. Configure settings:
   - Allow anonymous submissions
   - Require manager approval
   - Send confirmation email
   - Notify managers
   - Allow save draft
8. Click **Save Template**

### Step 5: Share Forms
1. Go to **Forms & Surveys** > Select your form
2. Click **Share**
3. Choose recipients:
   - Specific users
   - All managers
   - All HR staff
   - All admins
   - Specific departments
4. Set permissions:
   - Can view
   - Can edit
   - Can delete
5. Toggle **Public Template** to share organization-wide
6. Click **Save**

### Step 6: View Analytics
1. Navigate to **Analytics** > **Survey Analytics**
2. Or go to: `/analytics/surveys`
3. Select time range (7, 30, 90, 365 days)
4. Filter by survey type
5. View:
   - Overall sentiment trends
   - Per-survey breakdowns
   - Common themes
   - Recommended actions
6. Click **Export Report** to download

---

## Database Schema

### New Models

#### SurveyIntegration
Stores connection details for external survey platforms:
```prisma
model SurveyIntegration {
  id                String
  organizationId    String
  platform          SurveyPlatform
  apiKey            String? // Encrypted
  accessToken       String?
  refreshToken      String?
  webhookUrl        String?
  isActive          Boolean
  syncFrequency     Int // minutes
  lastSyncAt        DateTime?
  settings          Json
}
```

#### SurveyMapping
Maps external surveys to internal categories:
```prisma
model SurveyMapping {
  id                String
  integrationId     String
  externalSurveyId  String
  surveyName        String
  surveyType        SurveyType
  autoImport        Boolean
  fieldMappings     Json
}
```

#### SurveyResponse
Stores individual survey responses:
```prisma
model SurveyResponse {
  id                String
  integrationId     String
  mappingId         String?
  externalId        String
  employeeId        String?
  respondentEmail   String?
  respondentName    String?
  surveyType        SurveyType
  responses         Json
  score             Float?
  sentiment         String?
  tags              String[]
  isAnonymous       Boolean
  submittedAt       DateTime
  importedAt        DateTime
}
```

#### FormTemplate
Custom form templates created in the builder:
```prisma
model FormTemplate {
  id                String
  organizationId    String
  createdBy         String
  name              String
  description       String?
  category          FormCategory
  isPublic          Boolean
  fields            Json
  settings          Json
  version           Int
  isActive          Boolean
  usageCount        Int
}
```

#### FormSubmission
Form responses from internal forms:
```prisma
model FormSubmission {
  id                String
  templateId        String
  submittedBy       String
  submitterName     String
  submitterEmail    String?
  responses         Json
  status            FormSubmissionStatus
  approvedBy        String?
  approvedAt        DateTime?
  rejectedReason    String?
  attachments       String[]
  submittedAt       DateTime
}
```

---

## Use Cases

### Healthcare Organizations
1. **Patient Satisfaction Surveys**
   - Connect SurveyMonkey for post-visit satisfaction surveys
   - Real-time sentiment tracking
   - Identify trends in wait times, staff friendliness, facility cleanliness
   - Generate action items for improvement

2. **Culture of Safety Surveys**
   - Annual or quarterly safety culture assessments
   - Track improvement over time
   - Compliance with Joint Commission standards
   - Compare against industry benchmarks

3. **Employee Engagement**
   - Pulse surveys for staff morale
   - Exit interview feedback
   - Onboarding experience surveys
   - Training effectiveness evaluation

### Retail Organizations
1. **Customer Experience Surveys**
   - Post-purchase satisfaction
   - In-store experience feedback
   - Product quality ratings

2. **Employee Feedback**
   - Schedule satisfaction
   - Training needs assessment
   - Manager effectiveness

### Manufacturing & Construction
1. **Safety Incident Reports**
   - Custom form for near-miss reporting
   - Equipment malfunction logs
   - OSHA compliance tracking

2. **Quality Control Surveys**
   - Production line feedback
   - Quality assurance checklists
   - Equipment maintenance reports

---

## Best Practices

### Survey Design
1. **Keep it Short** - 10 questions or less for best completion rates
2. **Mix Question Types** - Use ratings, multiple choice, and open-ended
3. **Mobile-Friendly** - Ensure surveys work on phones (all integrations support this)
4. **Anonymous Option** - Encourage honest feedback with anonymity
5. **Follow-Up** - Act on feedback and communicate changes

### Form Management
1. **Use Templates** - Create reusable forms to save time
2. **Version Control** - Update forms instead of creating duplicates
3. **Regular Review** - Archive unused forms to keep library clean
4. **Consistent Categories** - Use standardized categories for easy searching
5. **Clear Labels** - Use descriptive field labels and help text

### Analytics Review
1. **Weekly Check-ins** - Review survey analytics every week
2. **Track Trends** - Look for patterns over time, not single responses
3. **Action Items** - Document and assign follow-up actions
4. **Share Results** - Communicate findings to relevant teams
5. **Close the Loop** - Tell respondents what changed based on their feedback

---

## API Endpoints

### Survey Webhooks
- **SurveyMonkey**: `POST /api/webhooks/surveymonkey`
- **Microsoft Forms**: `POST /api/webhooks/microsoft-forms`
- **Google Forms**: `POST /api/webhooks/google-forms`
- **Typeform**: `POST /api/webhooks/typeform`

### Form Management
- **Create Template**: `POST /api/forms/templates`
- **Update Template**: `PUT /api/forms/templates/:id`
- **Delete Template**: `DELETE /api/forms/templates/:id`
- **Submit Form**: `POST /api/forms/submissions`
- **Get Submissions**: `GET /api/forms/submissions/:templateId`

### Survey Data
- **Sync Now**: `POST /api/surveys/sync/:integrationId`
- **Get Responses**: `GET /api/surveys/responses`
- **Get Analytics**: `GET /api/surveys/analytics`
- **Export Data**: `GET /api/surveys/export`

---

## Tier Access

### Professional Tier ($499/month)
✅ Custom Form Builder (unlimited forms)
✅ 1 Survey Platform Integration
✅ Basic Analytics Dashboard
✅ 1,000 responses/month
✅ Email notifications

### Enterprise Tier ($1,499/month)
✅ All Professional features
✅ All 4 Survey Platform Integrations
✅ Advanced Analytics with Sentiment Analysis
✅ 10,000 responses/month
✅ Webhook support (real-time sync)
✅ Custom field mappings
✅ Action item recommendations
✅ Export reports (PDF/CSV)

### Titan Tier ($2,999/month)
✅ All Enterprise features
✅ Unlimited responses
✅ Custom survey platform integrations
✅ AI-powered theme extraction
✅ Predictive trend analysis
✅ White-label surveys
✅ Dedicated survey consultant
✅ Custom reporting dashboards

---

## Security & Compliance

### Data Protection
- All API keys and tokens are **encrypted** at rest
- Survey responses stored in **encrypted PostgreSQL database**
- HIPAA-compliant data handling for healthcare surveys
- Role-based access control (RBAC) for viewing responses

### Privacy
- Support for **anonymous submissions**
- PII data handling complies with GDPR/CCPA
- Respondent data never shared with third parties
- Right to deletion honored (GDPR Article 17)

### Audit Trail
- All form submissions tracked with timestamps
- Manager approvals logged
- Form edits versioned
- Survey sync history maintained

---

## Troubleshooting

### Common Issues

**Issue: Webhook not receiving data**
- Verify webhook URL is correctly configured in external platform
- Check that integration is marked as "Active"
- Ensure firewall isn't blocking incoming webhooks
- Test with manual sync first

**Issue: Survey responses not importing**
- Check API key/token is valid and not expired
- Verify survey mapping is configured
- Ensure "Auto Import" is enabled
- Review sync frequency setting

**Issue: Form won't save**
- Check that all required fields have labels
- Ensure dropdown/radio fields have at least 2 options
- Verify category is selected
- Check browser console for errors

**Issue: Analytics not showing data**
- Confirm time range includes response dates
- Check that surveys are mapped to correct types
- Verify employee associations are set
- Review data permissions

### Support
For additional help:
- Email: support@nyxtitan.com
- In-app chat: Click Titan (bottom right)
- Knowledge Base: `/help`
- Video tutorials: Coming soon!

---

## Roadmap

### Coming Soon
- [ ] Qualtrics integration
- [ ] Survey branching/conditional logic
- [ ] Automated survey scheduling
- [ ] SMS survey distribution
- [ ] Multi-language support
- [ ] Advanced reporting with charts
- [ ] Survey response API
- [ ] Zapier integration
- [ ] Custom webhook endpoints

### Under Consideration
- SurveyGizmo integration
- NPS (Net Promoter Score) tracking
- Survey templates marketplace
- AI survey question suggestions
- Sentiment analysis improvements
- Response rate optimization tips

---

## Summary

The Survey Integration & Forms System provides a complete solution for gathering, analyzing, and acting on feedback from patients, employees, and customers. By connecting popular survey platforms and providing a powerful custom form builder, NyxTitan eliminates the need for separate survey tools and consolidates all feedback in one place.

**Key Benefits:**
✨ Real-time data sync from multiple platforms
✨ Comprehensive form builder with 14 field types
✨ Advanced analytics with sentiment analysis
✨ Automated action item recommendations
✨ Secure, HIPAA-compliant data storage
✨ Role-based access and permissions
✨ Template library for quick form creation
✨ Export reports for presentations

Get started today by connecting your first survey platform or creating a custom form!
