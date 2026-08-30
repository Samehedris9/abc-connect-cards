# ABC Counsel Connect

MASTER PROMPT — ABC Counsel Digital Business Cards



Act as a Senior UI/UX Designer and Expert Frontend Developer.



Create a premium, modern, mobile-first Digital Business Card website for a consulting company called:



ABC Counsel



The website will initially contain Digital Business Cards for 2 employees.



Each employee must have:



- A completely separate public page

- A unique URL

- A unique QR Code

- Contact buttons

- WhatsApp integration

- Email integration

- LinkedIn integration

- Company LinkedIn integration

- Save Contact functionality using a VCF file

- Share Card functionality



---



MAIN GOAL



Create a highly professional Digital Business Card experience that looks premium and modern.



The design should feel inspired by:



- Apple

- Microsoft

- Modern corporate websites

- Premium digital business cards



The experience must be especially optimized for mobile devices, because users will primarily open the cards by scanning a QR Code.



---



DESIGN STYLE



Create a clean and elegant corporate design.



Brand Colors



Primary Color:



- Deep Navy Blue



Secondary Color:



- White



Accent Color:



- Premium Gold



Suggested colors:



Navy: #0B1F3A

Dark Navy: #071426

Gold: #C9A227

White: #FFFFFF

Light Gray: #F5F7FA

Text Dark: #1A1A1A



---



DESIGN REQUIREMENTS



The UI should include:



- Rounded corners

- Premium shadows

- Glassmorphism where appropriate

- Smooth animations

- Elegant transitions

- Clean typography

- Excellent spacing

- Modern icons

- Professional corporate appearance



Avoid:



- Overly colorful designs

- Cheap-looking gradients

- Excessive animations

- Cluttered layouts



The final design should feel expensive, clean, and trustworthy.



---



RESPONSIVE DESIGN



The website must be:



- Mobile First

- Fully responsive

- Perfect on Android

- Perfect on iPhone

- Optimized for QR Code visitors



On desktop, the card should remain centered with a beautiful surrounding layout.



On mobile, everything should be easy to use with one hand.



---



WEBSITE STRUCTURE



Create the following structure:



/

├── Employee 1 Digital Card

├── Employee 2 Digital Card



Use separate routes:



/card/employee-1

/card/employee-2



The routes must be easy to change later.



---



DIGITAL BUSINESS CARD DESIGN



Each employee page should contain the following sections.



---



1. HEADER



At the top:



- ABC Counsel Logo

- Company Name: ABC Counsel



Use a clean premium layout.



The header should not take too much space on mobile.



---



2. EMPLOYEE PROFILE SECTION



Display:



- Professional circular profile image

- Employee Full Name

- Job Title

- Short professional description



Example:



Ahmed Mohamed



Business Central Consultant



Helping businesses streamline operations and grow with Microsoft Dynamics 365 Business Central.



The employee photo should have:



- Circular shape

- Premium border

- Gold accent

- Soft shadow



---



3. CONTACT ACTION BUTTONS



Create large, easy-to-tap contact buttons.



Include:



📞 Call



Clicking the button should directly call the employee.



Use:



tel:+XXXXXXXXXXX



---



💬 WhatsApp



Clicking the button should open WhatsApp chat directly.



---



✉️ Email



Clicking should open the user's email application.



---



🔗 Personal LinkedIn



Open the employee's LinkedIn profile.



---



🌐 ABC Counsel LinkedIn



Open the official ABC Counsel LinkedIn company page.



---



BUTTON DESIGN



Each contact option should appear as a modern card/button.



Example:



┌─────────────────────────────┐

│ 📞   +20 XXX XXX XXXX      ›│

└─────────────────────────────┘



┌─────────────────────────────┐

│ 💬   Chat on WhatsApp      ›│

└─────────────────────────────┘



┌─────────────────────────────┐

│ ✉️   employee@email.com    ›│

└─────────────────────────────┘



Use:



- Icon on the left

- Text in the center/left

- Arrow icon on the right

- Smooth hover and tap animations



---



4. PRIMARY ACTIONS



Create two prominent buttons:



SAVE CONTACT



This button must generate and download a valid ".VCF" contact file.



The VCF should contain:



- Full Name

- Job Title

- Company Name: ABC Counsel

- Mobile Number

- Email

- LinkedIn URL

- Website if available



The downloaded contact should be easy to import into Android and iPhone contacts.



---



SHARE CARD



Use the native Web Share API when available.



Share:



- Employee name

- Job title

- Digital card URL



Fallback gracefully if Web Share API is unavailable.



---



5. QR CODE SECTION



At the bottom of every employee page, create a beautiful QR Code section.



Design:



──────── SCAN TO SAVE CONTACT ────────



              [ QR CODE ]



       Add me to your contacts



Important:



Each employee must have a different QR Code.



The QR Code should point to that employee's specific Digital Business Card URL.



Example:



Employee 1:



/card/employee-1



Employee 2:



/card/employee-2



The QR Code should be:



- High quality

- Easy to scan

- Large enough for mobile cameras

- Displayed on a clean white background



Add a small ABC Counsel logo or branding only if it does not reduce QR Code scannability.



---



EMPLOYEE DATA ARCHITECTURE



Do NOT hardcode the entire UI separately for each employee.



Create a reusable data-driven system.



Example concept:



employees = [

  {

    slug,

    name,

    title,

    description,

    phone,

    whatsapp,

    email,

    linkedin,

    image

  }

]



The same reusable Digital Card component should dynamically render each employee.



This will make it easy to add more employees later.



---



INITIAL EMPLOYEES



Create placeholder employee data for now.



Employee 1



Name: Ahmed Mohamed

Title: Business Central Consultant

Phone: +20 XXX XXX XXXX

Email: ahmed@abccounsel.com

LinkedIn: https://linkedin.com/



Description:



Helping businesses streamline operations and grow with Microsoft Dynamics 365 Business Central.



---



Employee 2



Name: Omar Hassan

Title: Technical Consultant

Phone: +20 XXX XXX XXXX

Email: omar@abccounsel.com

LinkedIn: https://linkedin.com/



Description:



Delivering smart technical solutions and professional support for Business Central and ERP systems.



These details must be easy to replace later.



---



ANIMATIONS



Use subtle premium animations.



Include:



- Fade-in when page loads

- Profile image entrance animation

- Smooth button press effects

- Slight hover elevation on desktop

- Smooth transitions



Do not use excessive animations.



Performance is important.



---



MOBILE EXPERIENCE



This is extremely important.



Optimize for users opening the website from QR Codes.



Requirements:



- Large touch targets

- Fast loading

- No horizontal scrolling

- Contact buttons easy to tap

- Excellent spacing

- QR Code clearly visible

- Save Contact button prominent



The mobile experience should feel like a native application.



---



DESKTOP EXPERIENCE



On desktop:



- Center the Digital Card

- Use a maximum content width

- Add a subtle professional background

- Keep the card as the visual focus



Do not stretch the card excessively.



---



BACKGROUND



Use a sophisticated background such as:



- Very light gray

- Soft navy gradients

- Subtle abstract geometric shapes



The background must not distract from the Digital Business Card.



---



TECHNICAL REQUIREMENTS



Build the application with:



- React

- TypeScript

- Modern component architecture

- Responsive CSS

- Clean reusable components



Use:



- Lucide icons

- Web Share API

- Dynamic QR Code generation

- Dynamic VCF generation



Do not require a backend or database for the initial version.



The application should be able to work as a static website.



---



COMPONENT STRUCTURE



Create reusable components such as:



components/

├── DigitalCard

├── ProfileHeader

├── ContactButton

├── ActionButtons

├── QRCodeSection

└── Footer



Keep the architecture clean and scalable.



---



FUTURE SCALABILITY



Design the system so that ABC Counsel can easily add:



- More employees

- More contact methods

- Company website

- Instagram

- Facebook

- Calendly booking

- Multiple languages



Do not build unnecessary backend functionality now.



---



LOADING EXPERIENCE



Add a premium loading state.



Display:



- ABC Counsel Logo

- Small elegant loading animation

- Text:



Loading Digital Card...



The loading screen should be minimal and professional.



---



FINAL QUALITY REQUIREMENTS



The final website must feel:



- Premium

- Corporate

- Modern

- Trustworthy

- Fast

- Mobile-first

- Professional



Think like you are designing a Digital Business Card platform for a high-end international consulting company.



Do not create a generic template.



Focus heavily on:



- UI quality

- Spacing

- Typography

- Mobile experience

- Professional branding



Create the complete working application with the two employee pages and reusable architecture.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/022f9d6b-9075-4ae8-80eb-0af45703eecd).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
