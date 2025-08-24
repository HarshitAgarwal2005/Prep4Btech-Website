# Prep4Btech - Academic Resource Platform

A comprehensive academic resource platform for B.Tech students with notes, assignments, projects, and study materials.

## Features

- 📚 Chapter-wise notes organized by year and semester
- 📝 Assignments with solutions
- 🚀 Project ideas with complete documentation
- 💬 Interactive doubt resolution system
- 📧 Email notifications for doubt submissions
- 🌙 Dark/Light theme support
- 📱 Responsive design

## Doubt Submission System

The platform includes an efficient doubt submission system that:

1. **Collects student information**: Name, email, subject, and detailed question
2. **Supports image uploads**: Students can attach screenshots or diagrams
3. **Sends email notifications**: All doubts are automatically emailed to prep4btech@gmail.com
4. **Provides instant feedback**: Students receive confirmation of successful submission

### Email Features

- **Rich HTML formatting**: Professional email layout with proper styling
- **Complete information**: Includes all submission details (name, email, subject, question, timestamp)
- **Image handling**: Supports image attachments up to 5MB
- **Error handling**: Robust error handling with user-friendly messages
- **Loading states**: Visual feedback during submission process

## Setup Instructions

### 1. Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 2. Supabase Edge Function Setup

The doubt submission system uses a Supabase Edge Function located at:
`supabase/functions/send-doubt-email/index.ts`

To deploy this function:

1. Install Supabase CLI
2. Login to your Supabase project
3. Deploy the function:
   ```bash
   supabase functions deploy send-doubt-email
   ```

### 3. Email Service Configuration

The system is designed to work with various email services. You can configure:

- **EmailJS**: For client-side email sending
- **SendGrid**: For server-side email API
- **Nodemailer**: For SMTP-based sending
- **Supabase Auth**: For built-in email functionality

## Usage

### For Students

1. **Browse Content**: Navigate through years, subjects, and chapters
2. **Ask Doubts**: Click the floating doubt button on any page
3. **Submit Questions**: Fill out the form with your question and optional contact info
4. **Get Responses**: Receive email responses directly from Team

### For Administrators

1. **Receive Notifications**: All doubt submissions are emailed to harshitagarwal25907@gmail.com
2. **Rich Information**: Emails include complete student information and formatted questions
3. **Easy Response**: Reply directly to student emails for personalized help

## Technical Implementation

### Frontend (React + TypeScript)
- **Form Validation**: Client-side validation for required fields
- **File Upload**: Image upload with size validation (max 5MB)
- **Error Handling**: User-friendly error messages and loading states
- **Responsive Design**: Works on all device sizes

### Backend (Supabase Edge Functions)
- **CORS Support**: Proper CORS headers for cross-origin requests
- **Input Validation**: Server-side validation of required fields
- **Email Formatting**: Rich HTML email templates
- **Error Handling**: Comprehensive error handling and logging

### Security Features
- **File Size Limits**: Prevents large file uploads
- **Input Sanitization**: Protects against malicious input
- **Rate Limiting**: Can be configured to prevent spam
- **CORS Protection**: Secure cross-origin request handling

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Deployment

The application is deployed on Netlify and can be accessed at:
https://prep4btech.netlify.app

## Contact

**Developer**: Harshit Agarwal  
**Email**: harshitagarwal25907@gmail.com  
**College**: JECRC Foundation, Jaipur  
**Branch**: Computer Science Engineering (CSE)

## License

This project is open source and available under the MIT License.