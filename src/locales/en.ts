export default {
  metadata: {
    title: "Minsu Kim | Portfolio",
    description: "Frontend Developer Minsu Kim's Portfolio Website",
  },
  thmeSwitcher: {
    light: "Light",
    dark: "Dark",
    system: "System",
  },
  customCursorButton: {
    on: "Enable Custom Cursor",
    off: "Disable Custom Cursor",
  },
  customCursorToogle: {
    on: "Custom Cursor Enabled",
    off: "Custom Cursor Disabled",
  },
  hero: {
    introHeader: "3rd Year Frontend Developer",
    name: "Minsu Kim",
    introFooter: "",
    introDescription:
      "I've dreamed of becoming a developer since middle school. Now, as a 3rd-year developer, I’ve realized that dream. However, I’m not content with staying where I am. I constantly strive for growth and improvement, always aiming for bigger goals.",
    contactMe: "Contact Me",
    channelTalk:
      "Please use the channel talk at the bottom right corner or reach out via email.",
  },
  laptop: {
    pc: "You can interact with the internal content of your laptop screen,\n and you can rotate left and right or open and close the screen.",
    mobile:
      "You can interact with the internal content of your laptop screen,\n and you can also open and close the screen.",
    info: "The rotation feature is available on PC!",
    loading: "Please wait\nloading the model...",
  },
  aboutMe: {
    title: "AboutMe",
    description:
      "I have <strong>frontend development experience</strong> utilizing React, Next.js, and React Native, as well as experience in REST API design, database schema design, server setup, and <strong>service operation</strong>.",
    description1:
      "Based on my experience in operating services, I am capable of <strong>smooth collaboration</strong> with backend developers and designers.",
    description2:
      "I developed an <strong>interest in development</strong> when I set up a Minecraft server and modified plugins in middle school, enjoying watching users have fun. In high school, I ran a security and development club and participated in various development projects, achieving <strong>awards and recognitions</strong>.",
  },
  workExperience: {
    viewDetails: "View Details",
    title: "WorkExperience",
    companyName: "DADOL",
    position: "Development Team - Intern",
    companyName1: "KAI",
    position1: "Development Team - Employee",
  },
  contact: {
    contactMe: "Contact Me",
    announcement: "Notice",
    emailSentSuccessfully: "The email has been successfully sent.",
    confirm: "Confirm",
    emailCopied: "The email address has been copied.",
    pasteAndUse: "Please paste it where needed.",
    useChannelTalkOrEmail:
      "Please use the channel talk at the bottom right or contact us by email.",
    email: "Email",
    emailPlaceholder1: "e.g you@example.com",
    emailPlaceholder2: "Email",
    subject: "Subject",
    enterSubject: "Subject",
    content: "Message (maximum 2000 characters)",
    enterContent: "Message",
    sendEmail: "Send",
    validEmail: "Please enter a valid email address.",
    emailMaxLength: "The email address can be up to 254 characters long.",
    subjectRequired: "The subject is a required field.",
    subjectMaxLength: "The subject can be up to 254 characters long.",
    contentRequired: "Content is a required field.",
    contentMaxLength: "Content can be up to 2000 characters long.",
    protectedBy: "This site is protected by reCAPTCHA and the Google\n",
    privacyPolicy: "Privacy Policy",
    and: " and ",
    termsOfService: "Terms of Service",
    apply: " apply.",
  },
  error: {
    apology: "Something went wrong!",
    tryAgainLater: "Please try again later.",
    againLater: "Please try again later.",
    retry: "Retry",
    confirm: "Confirm",
    emailCopyFailed: "An error occurred while copying the email address.",
    emailSendFailed: "An error occurred while sending the email.",
  },
  notFound: {
    title: "Page not found.",
    description:
      "The page you are looking for might be removed or temporarily unavailable.\nPlease check the URL and try again.",
    homeButton: "Go back to home",
  },
  activity: {
    education: "Education",
    activities: "Activities",
    certificates: "Certificates",
  },
} as const;
