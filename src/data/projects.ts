import { ProjectType } from "../constants/index.ts";
import phyxhubImage from "@/assets/phyxhub.webp";
import fractalsImage from "@/assets/fractals.webp";
import metroCircuitImage from "@/assets/metro-circuit.webp";
import toastatorImage from "@/assets/toastator.webp";
export interface Project {
  id: string;
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  industry: string[];
  technologies: string[];
  image: string;
  href: string;
  type: string;
  overview?: string;
  problem?: string;
  solution?: string;
  features?: string[];
  techBreakdown?: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    infrastructure?: string[];
    other?: string[];
  };
  privacyPolicy?: string;
}

const fractalsOfEntropyPrivacyPolicy = `# Privacy Policy for Fractals of Entropy

Effective Date: 25 October 2026
Last Updated: 25 October 2026
Developer: Maximilian Vincentius
Privacy Contact: mv@pointxtech.com

## About This Privacy Policy
This Privacy Policy explains how Maximilian Vincentius ("we," "us," or "our") handles information when you use Fractals Entropy (the "Game") on Android. It covers information processed locally on your device and information you voluntarily provide when you contact us for support or privacy inquiries.

The Game uses local player profiles to organize saved progress. These profiles are not online accounts and do not require an email address, password, or Google account login. You may use a nickname instead of your real name.

## Information Processed on Your Device

### 2.1 Local Player Profiles
When you create a player profile, the Game stores:
- Your chosen player name.
- A randomly generated profile identifier.
- The date and time the profile was created.
- The date and time the profile was last selected for play.
- The currently selected profile.

The profile identifier distinguishes local saved profiles. It is not a device identifier or advertising identifier. Your player name is used to identify your profile and as a display name within the Game. Please avoid entering sensitive personal information.

### 2.2 Saved Game Data
The Game stores information needed to save and restore progress, including:
- Character position, facing direction, and health.
- In-game coins and owned items.
- Equipped weapons, ammunition, and weapon upgrades.
- Character and weapon cosmetic selections.
- Buff charges.
- Mission and campaign progress.
- Enemy defeat records and relevant game world states.
- Gameplay timers used for mission progress.
- Tutorial progress and reward status.
- Certain interface preferences.

Character positions refer to locations within the virtual game world, not real-world geographic location. Gameplay timers are used locally for game functionality and progress tracking. They are not transmitted to us as behavioral analytics.

### 2.3 Game Settings
The Game stores preferences such as:
- Language.
- Music volume.
- Sound effect volume.
- Graphics quality.
- Frame rate.

These preferences allow the Game to apply your chosen settings during later sessions.

### 2.4 Device Capabilities
The Game reads basic hardware and graphics capability information to select an initial graphics quality setting. This may include available system and graphics memory information, processor count, graphics processor name, and supported graphics features. This information is processed locally for graphics configuration. The Game does not send it to us or use it to create an advertising profile.

### 2.5 Local Storage
Player profiles, progress, and settings are stored locally in the Game's application storage using Unity's preference storage system. If certain stored profile information cannot be read, the Game may preserve a local copy of that information to avoid immediately overwriting it. We do not receive your local profiles or saved progress through the Game, and we do not provide server-based synchronization or cloud saves.

## How Information Is Used
Locally processed information is used to:
- Create and manage separate player profiles.
- Display your chosen player name.
- Save and restore game progress.
- Remember tutorial progress.
- Maintain inventory, equipment, and mission states.
- Apply your language, audio, and graphics preferences.
- Select an initial graphics quality setting suitable for your device.

We do not use this information for advertising, marketing profiles, or tracking across other applications.

## Information You Provide When Contacting Us
If you contact us by email, we receive your email address, any name displayed in your email, your message, and any attachments you choose to provide. You may voluntarily provide technical information, such as device model, Android version, Game version, screenshots, and a description of the issue.

We use this information to:
- Respond to questions.
- Investigate and resolve reported issues.
- Handle privacy requests.
- Maintain security and support communications.
- Comply with applicable legal obligations.

Contacting us is optional and not required to play the Game. Please do not send passwords, identity documents, payment information, or other sensitive information that is unnecessary for your request.

## Device Permissions and Online Features
The Game's gameplay functionality does not require access to your real-world location, contacts, camera, microphone, text messages, or call history. The Game does not request Google account credentials or payment card information.

The version covered by this Privacy Policy does not provide:
- Online account registration or login.
- Third-party advertising.
- Real-money in-app purchases.
- Online behavioral analytics.
- Automatic transmission of crash reports or diagnostic information to us through an integrated reporting service.
- Server-based player profiles or cloud synchronization of saved progress.

The in-game shop uses virtual gameplay currency and does not process real-money payments.

## Third-Party Services and Information Disclosure

### 6.1 Unity
Fractals Entropy is developed using the Unity game engine. Unity Analytics, Unity Ads, Unity Purchasing, and Unity crash and performance reporting services are disabled in the version covered by this Privacy Policy. The Game does not transmit your local player profiles or saved game data to these services.

### 6.2 Google Play
The Game is distributed through Google Play and operates on Android. Google Play, Android, and your device provider may independently process information under their own policies and your account or device settings. Google's Privacy Policy is available at:
https://policies.google.com/privacy

This Privacy Policy describes our handling of information in connection with the Game. It does not replace policies governing services independently operated by Google or your device provider.

### 6.3 Email Service Providers
When you contact us, correspondence is processed through email services used to send, receive, and store messages. Depending on the providers involved, information may be processed and stored outside your country, subject to applicable data protection requirements.

### 6.4 Disclosure of Information
We do not sell or rent personal information. Information you provide for support may be accessed by people who need it to handle your request and by email service providers used to process correspondence. We may disclose information in our possession when required by applicable law or a valid request from a competent authority, limited to what is necessary.

## Information Retention and Deletion

### 7.1 Local Game Data
Local player profiles, saved progress, and preferences remain on your device until you delete them or the operating system removes the Game's application data. Certain unreadable profile records may be preserved as local recovery copies.

### 7.2 Deleting a Player Profile
You can delete a player profile by opening the profile selection menu, selecting the relevant profile, and choosing the delete option. Deleting a profile removes its entry and the saved progress associated with its registered storage keys. General settings and certain recovery copies may remain in application storage. To remove all remaining local information, clear the Game's application data as described below.

### 7.3 Deleting All Local Game Data
To remove all locally stored Game data, use your device's application settings. A typical path is:
Android Settings > Apps > Fractals Entropy > Storage > Clear Data or Clear Storage
Exact names and steps may vary by device.

Clearing application data removes local profiles, saved progress, settings, and local recovery copies. This may result in permanent loss of progress.

Uninstalling the Game generally removes its application data. However, operating system backups and restoration may depend on your device settings and backup provider. Any backups maintained by Android or another device service must be managed through that service. We cannot remotely delete information stored on your device or in backups controlled by other services.

### 7.4 Support Correspondence
We retain support correspondence for as long as necessary to resolve your request and complete relevant follow-up. When it is no longer needed, we delete it unless further retention is necessary to meet legal obligations or resolve a dispute. You may request deletion by contacting mv@pointxtech.com. If certain information must be retained, we will explain the reason in our response.

## Security and Your Choices

### 8.1 Security
Local Game data is stored within application storage managed by Android. The Game's preference storage is not intended to securely store confidential information. No method of electronic storage or communication is completely secure. We encourage you to protect your device with a screen lock and to avoid using sensitive personal information as your player name.

### 8.2 Your Choices
You can:
- Use a nickname instead of your real name.
- Adjust your language, audio, graphics, and frame rate settings.
- Delete individual player profiles.
- Clear all Game application data through Android settings.
- Choose whether to contact us and what information to include.

For information you have sent directly to us, you may request access, correction, deletion, or exercise other rights available under applicable law. We may request the minimum information necessary to verify and respond to your request. We do not have remote access to your local profiles or saved progress. To submit a privacy request, email mv@pointxtech.com.

## Children's Privacy
The Game does not request date of birth or require an online account. Local player names are stored on your device and are not transmitted to us through the Game. Parents and guardians are encouraged to help children choose a nickname and avoid sharing personal information in support messages.

If you believe a child has provided personal information to us that should not be processed, please contact mv@pointxtech.com so we can review the matter and delete the information as required by applicable law.

## Changes to This Privacy Policy
We may update this Privacy Policy when the Game's features or our information handling practices change. The "Last Updated" date will indicate when the policy was most recently revised. We will communicate significant changes through the Game or the relevant policy publication channel. Where required by applicable law, we will provide additional notice and obtain consent before beginning new processing activities.

## Contact Us
If you have questions about this Privacy Policy or wish to submit a privacy request, please contact:
Developer: Maximilian Vincentius
Email: mv@pointxtech.com
Suggested Email Subject: Fractals Entropy Privacy

Please describe your question or request without including sensitive information that is unnecessary for us to respond.`;

const metroCircuitPrivacyPolicy = `# Privacy Policy for Metro Circuit

Effective Date: 26 October 2026
Last Updated: 26 October 2026
Developer: Maximilian Vincentius
Privacy Contact: mv@pointxtech.com
Suggested Email Subject: Metro Circuit Privacy

## About This Privacy Policy
This Privacy Policy explains how Maximilian Vincentius ("we," "us," or "our") handles information when you use Metro Circuit (the "Game") on Android. It covers information processed on your device and information you voluntarily provide when you contact us for support or privacy inquiries.

Metro Circuit uses local player profiles to organize saved progress. These profiles are not online accounts and do not require an email address, password, or Google account login. You may use a nickname as your player name. You do not need to provide your real name.

## Information Processed on Your Device

### 2.1 Player Profiles
The Game stores information needed to create and manage local player profiles, including:
- The player name you enter.
- A randomly generated profile identifier.
- The date and time the profile was created.
- The date and time the profile was last used.

Profile identifiers distinguish local player profiles and saved progress. They are not advertising identifiers or hardware device identifiers.

### 2.2 Saved Game Data
The Game stores information needed to save and restore progress, including:
- Your current level and campaign progress.
- Campaign completion status.
- Tutorial progress and completion status.
- The saved state of the game world.
- Character and object positions needed to resume gameplay.

Character and object positions refer to locations within the game world, not real-world geographic location.

### 2.3 Game Settings
The Game stores preferences, including:
- Language.
- Graphics quality.
- Music volume.
- Sound effect volume.

These preferences allow the Game to apply your chosen settings during subsequent sessions.

### 2.4 Device Capabilities
The Game reads certain technical capabilities of your device to select an appropriate initial graphics quality setting, including:
- System memory capacity.
- Graphics memory capacity.
- Processor core count.
- Graphics shader capability.
- Compute shader support.
- Graphics device name.

This information is processed locally on your device to adjust graphics quality. The resulting graphics preference is stored locally. The Game does not transmit this device capability information to us or to third-party servers.

### 2.5 Local Storage
Player profiles, saved progress, and preferences are stored locally using the Game's application storage. The Game may retain older saved data during migration between versions to preserve local recovery copies if saved data cannot be read correctly. We do not receive copies of this information through the Game's save functionality, and we do not provide synchronization of saved progress on our servers.

## How Information Is Used
Information processed locally is used to:
- Provide the Game's core functionality.
- Create and distinguish local player profiles.
- Display your chosen player name.
- Save and restore progress.
- Remember tutorial and campaign completion.
- Apply language and audio preferences.
- Select and remember graphics quality settings.

We do not use this locally processed information for advertising, marketing profiles, or tracking across other applications.

## Information You Provide When Contacting Us
If you contact us by email, we receive your email address, any name displayed in your email, your message, and any attachments you choose to provide. You may voluntarily provide technical information, such as device model, Android version, Game version, and screenshots, to help us understand the problem.

We use this information to:
- Respond to questions.
- Investigate and resolve reported issues.
- Handle privacy requests.
- Protect security and support communications.
- Comply with applicable legal obligations.

Contacting us is optional and not required to play the Game. Please do not send passwords, identity documents, payment information, or other sensitive information that is unnecessary for your request. Remove or obscure unrelated personal information from screenshots before sending them.

## Device Permissions and Online Features
The Game's gameplay functionality does not require access to real-world location, contacts, camera, microphone, text messages, call history, or personal photos. The Game does not request your Google account credentials or payment card information.

The version of the Game covered by this Privacy Policy does not provide:
- Online account registration or login.
- Third-party advertising.
- In-app purchases.
- Online behavioral analytics.
- Developer-operated cloud saves.
- Automatic transmission of crash reports through an enabled developer crash-reporting service.


You can review the Game's permissions through Android application settings. Using the Game does not constitute blanket consent to new data processing activities that have not been disclosed. If future features require additional data processing or permissions, we will explain the relevant changes and obtain permission or consent where required.

## Third-Party Services and Information Disclosure

### 6.1 Unity
Metro Circuit is developed using Unity. Unity Analytics, Unity Ads, Unity Purchasing, Unity Crash Reporting, and Unity Performance Reporting are disabled in the version covered by this Privacy Policy. We do not transmit player profiles, saved progress, or game preferences to Unity or advertising networks through the Game's save functionality.

### 6.2 Google Play
The Game is distributed through Google Play and operates on Android. Google Play, Android, and device-provider services may independently process information relating to installation, distribution, security, diagnostics, and backups under their own policies and your account or device settings. Google's Privacy Policy is available at:
https://policies.google.com/privacy

This Privacy Policy describes our handling of information in connection with Metro Circuit. It does not replace privacy policies governing services independently operated by Google or your device provider.

### 6.3 Device Backups
We do not operate a cloud backup service for the Game. If your operating system or device backup service backs up application data, that processing is governed by the relevant service and its settings. Previously saved data may reappear if you restore a device backup. You should manage backups through your device or backup service settings.

### 6.4 Email Service Providers
When you contact us, your correspondence is processed through email services used to send, receive, and store messages. Depending on the providers involved, information may be stored and processed outside your country. Such processing is subject to the relevant service arrangements and applicable data protection requirements.

### 6.5 Disclosure of Information
We do not sell or rent personal information. Information you provide for support may be accessed by those who need it to handle your request and by email service providers used to process correspondence. We may disclose information in our possession where required by applicable law or a valid request from a competent authority. We may also disclose information where lawfully necessary to address abuse or protect rights and safety. Any such disclosure is limited to the information relevant and necessary for the applicable purpose.

## Information Retention and Deletion

### 7.1 Local Game Data
Player profiles, saved progress, and settings remain on your device until you delete them or the operating system removes the application's data. Older saved data and local recovery copies may remain in application storage even after an individual profile is deleted.

### 7.2 Deleting a Player Profile
To delete an individual player profile:
- Open the player management menu from the main menu.
- Select the profile you want to remove.
- Use the delete option for that profile.

An active profile must be deleted from the main menu. Deleting a profile removes that profile and the associated progress managed by the feature. General settings, older saved data, or certain local recovery copies may remain. Deleting an individual profile is therefore not the same as clearing all of the Game's application data.

### 7.3 Deleting All Local Game Data
To remove all locally stored Game data for the current installation, use your device's application settings. A typical path is:
Android Settings > Apps > Metro Circuit > Storage > Clear Data or Clear Storage
Exact names and steps may vary by device.

Clearing application data removes locally stored profiles, saved progress, settings, and recovery data. This action may result in permanent loss of progress.

Uninstalling the Game generally removes its application data. However, operating system backups and restoration may depend on your device settings and backup provider. Any backups must be managed separately through the relevant device backup service. We cannot remotely delete information stored on your device or in backups controlled by those services.

### 7.4 Support Correspondence
We retain support correspondence for as long as necessary to resolve your request and complete relevant follow-up. When it is no longer needed, we delete it unless a longer retention period is necessary to comply with legal obligations or resolve a dispute. You may request deletion by contacting mv@pointxtech.com. If we need to retain certain information, we will explain the applicable reason and retention limits.

## Security and Your Choices

### 8.1 Security
Local Game data is stored using application storage managed by Android. Saved data and preferences are not designed to store confidential or sensitive information. No method of electronic storage or communication is completely secure. We encourage you to protect your device with a screen lock and to avoid using sensitive personal information as your player name.

### 8.2 Your Choices
You can:
- Use a nickname instead of your real name.
- Change the Game's settings.
- Delete individual player profiles.
- Clear the Game's application data.
- Manage operating system backups separately.
- Choose whether to contact us and whether to provide attachments.

### 8.3 Privacy Rights
For information you have sent directly to us, you may request access, correction, or deletion and exercise other rights available under the laws applicable to you. These may include the right to restrict or object to certain processing and, where processing relies on consent, to withdraw consent for future processing. We may request the minimum information necessary to verify and respond to your request. We will respond within the time required by applicable law. Some rights may be subject to lawful limitations and exceptions. Where applicable, you may also submit a complaint to the relevant data protection authority.

We do not have remote access to your locally stored profiles or game progress. Local data should be managed using the controls described in Section 7. To submit a privacy request, email mv@pointxtech.com.

## Children's Privacy
The Game does not request date of birth or a child's identity and does not require an online account. The local data practices described in this Privacy Policy apply to all players. The version covered by this policy does not provide online chat or targeted advertising. Parents and guardians are encouraged to help children choose a nickname and avoid sending personal information through support emails.

If you believe a child has provided personal information to us that should not be processed, please contact mv@pointxtech.com so we can review the matter and delete the information as required by applicable law.

## Changes to This Privacy Policy
We may update this Privacy Policy when our information handling practices change. The "Last Updated" date will indicate when the policy was most recently revised. We will communicate significant changes through the Game or the relevant policy publication channel. Where required, we will provide an appropriate explanation and obtain consent before beginning a new processing activity.

## Contact Us
If you have questions about this Privacy Policy or wish to submit a privacy request, please contact:
Developer: Maximilian Vincentius
Email: mv@pointxtech.com
Suggested Email Subject: Metro Circuit Privacy

Please describe your question or request without including sensitive information that is unnecessary for us to respond.`;

const toastatorPrivacyPolicy = `# Privacy Policy for Toastator

Effective Date: 26 October 2026
Last Updated: 26 October 2026
Developer: Maximilian Vincentius
Privacy Contact: mv@pointxtech.com
Suggested Email Subject: Toastator Privacy

## About This Privacy Policy
This Privacy Policy explains how Maximilian Vincentius ("we," "us," or "our") handles information when you use Toastator (the "Game") on Android. It covers information stored on your device and information you voluntarily provide when you contact us for support or privacy inquiries.

Toastator can be played without creating an online account. The player name you use as a display name within the Game does not constitute a registered account. You may use a nickname and are not required to provide your real name.

## Information Processed on Your Device

### 2.1 Player Name
The Game stores the display name you enter so that it can appear in menus, dialogue, and other game interfaces. If you leave the name field blank, the Game uses the default name "PLAYER."

### 2.2 Saved Game Data
The Game stores information needed to save and restore progress, including:
- A randomly generated identifier for each save slot.
- The date and time of the save.
- Tutorial completion status.
- Character position and health.
- Level and experience points.
- In-game coins, inventory, and skill upgrades.
- Mission progress and rewards.
- Area progression state within the game world.

Save slot identifiers are used to distinguish saved games. They are not device identifiers or advertising identifiers. Character positions refer to locations within the virtual game world, not real-world geographic location.

### 2.3 Game Settings
The Game stores preferences, including:
- Language.
- Music and sound effect volume.
- Graphics quality.
- Frame rate settings.

These preferences allow the Game to apply your chosen settings during subsequent sessions.

### 2.4 Local Storage
The information described above is stored locally on your device using application storage, including preference data, saved game files, and local backup files. We do not receive copies of this information through the Game's save functionality, and we do not provide synchronization of saved progress on our servers.

## How Information Is Used
Locally stored information is used to:
- Provide the Game's core functionality.
- Display your chosen player name.
- Save and restore progress.
- Manage saved game slots.
- Remember completed tutorials.
- Apply your gameplay and device performance preferences.

We do not use locally stored information for advertising, marketing profiles, or tracking across other applications.

## Information You Provide When Contacting Us
If you contact us by email, we receive your email address, any name displayed in your email, your message, and any attachments you choose to provide. You may also voluntarily provide technical information, such as your device model, Android version, Game version, and screenshots, to help us understand the problem.

We use this information to:
- Respond to questions.
- Investigate and resolve reported issues.
- Handle privacy requests.
- Protect the security of support communications.
- Comply with applicable legal obligations.

Contacting us is optional and not required to play the Game. Please do not send passwords, identity documents, payment information, or other sensitive information that is unnecessary for your request.

## Device Permissions and Online Features
The Game's gameplay functionality does not require access to your real-world location, contacts, camera, microphone, text messages, or call history. The Game does not request your Google account credentials or payment card information.

The version of the Game covered by this Privacy Policy does not provide:
- Online account registration or login.
- Third-party advertising.
- In-app purchases.
- Online behavioral analytics.
- Automatic transmission of crash reports or diagnostic information to us through an SDK provider.

Using the Game does not constitute blanket consent to new data processing activities that have not been disclosed.

## Third-Party Services and Information Disclosure

### 6.1 Unity
Toastator is developed using Unity. Automatic analytics and diagnostic data collection services are disabled in the version covered by this Privacy Policy. We do not transmit your saved game data to Unity or to advertising networks.

### 6.2 Google Play
The Game is distributed through Google Play and operates on Android. Google Play and Android services may independently process information under their own policies and your account or device settings. Google's Privacy Policy is available at:
https://policies.google.com/privacy

This Privacy Policy describes our handling of information in connection with Toastator. It does not replace privacy policies governing services independently operated by Google or your device provider.

### 6.3 Email Service Providers
When you contact us, correspondence is processed through email services used to send, receive, and store messages. Depending on the providers involved, information may be stored and processed outside your country. Such processing is subject to the relevant service arrangements and applicable data protection requirements.

### 6.4 Disclosure of Information
We do not sell or rent personal information. Information you provide for support may be accessed by those who need it to handle your request and by email service providers used to process correspondence. We may disclose information in our possession where required by applicable law or a valid request from a competent authority, limited to what is necessary.

## Information Retention and Deletion

### 7.1 Local Game Data
Saved game data and settings remain on your device until you delete them or the operating system removes the application's data. The Game may create local backup files to help recover a saved game if the main save file cannot be read.

### 7.2 Deleting a Saved Game
To delete a specific saved game:
- Open the saved game list.
- Select the delete option for the relevant save slot.
- Confirm the deletion.

Deleting a save slot removes that saved game and its associated backup from the list of loadable saves. General settings and the player name stored in application preferences may remain.

### 7.3 Deleting All Local Game Data
To remove all locally stored Game data, use your device's application settings. A typical path is:
Android Settings > Apps > Toastator > Storage > Clear Data or Clear Storage
Exact names and steps may vary by device.

Clearing application data removes saved progress and preferences. This action may result in permanent loss of progress.

Uninstalling the Game generally removes its application data. However, operating system backups and restoration may depend on your device settings and backup provider. Any such backups must be managed through the relevant device or backup service. We cannot remotely delete information stored on your device or in backups controlled by those services.

### 7.4 Support Correspondence
We retain support correspondence for as long as necessary to resolve your request and complete relevant follow-up. When it is no longer needed, we delete it unless a longer retention period is necessary to comply with legal obligations or resolve a dispute. You may request deletion by contacting mv@pointxtech.com. If we need to retain certain information, we will explain the applicable reason and retention limits.

## Security and Your Choices

### 8.1 Security
Local Game data is stored using application storage managed by Android. Saved game files and preferences are not designed to store confidential information. No method of electronic storage or communication is completely secure. We encourage you to protect your device with a screen lock and to avoid using sensitive personal information as your player name.

### 8.2 Your Choices
You can:
- Use a nickname instead of your real name.
- Change your Game settings.
- Delete individual saved games.
- Clear the Game's application data.
- Choose whether to contact us and whether to provide attachments.

For information you have sent directly to us, you may request access, correction, or deletion and exercise other rights available under the laws applicable to you. We may request the minimum information necessary to verify and respond to your request. We do not have remote access to your locally stored game progress. To submit a privacy request, email mv@pointxtech.com.

## Children's Privacy
The Game does not request date of birth or a child's identity and does not require an online account. Parents and guardians are encouraged to help children choose a nickname and avoid sending personal information through support emails.

If you believe a child has provided personal information to us that should not be processed, please contact mv@pointxtech.com so we can review the matter and delete the information as required by applicable law.

## Changes to This Privacy Policy
We may update this Privacy Policy when our information handling practices change. The "Last Updated" date will indicate when the policy was most recently revised. We will communicate significant changes through the Game or the relevant policy publication channel. Where required, we will provide an appropriate explanation and obtain consent before beginning a new processing activity.

## Contact Us
If you have questions about this Privacy Policy or wish to submit a privacy request, please contact:
Developer: Maximilian Vincentius
Email: mv@pointxtech.com
Suggested Email Subject: Toastator Privacy

Please describe your question or request without including sensitive information that is unnecessary for us to respond.`;

export const projects = [
  {
    id: "phyxhub",
    slug: "phyxhub",
    number: "01",
    title: "PhyxHub",
    subtitle: "Interactive Physics Learning Platform",
    description:
      "A simulation-first platform that lets students manipulate variables and watch physics come alive in real time.",
    industry: ["Education", "Interactive Web", "Simulation"],
    technologies: ["React", "Tailwind CSS", "Express", "MongoDB"],
    image: phyxhubImage,
    href: "https://phyxhub.com",
    type: ProjectType.APP,
    overview: `PhyxHub is an interactive physics learning platform designed to help students understand complex physics concepts through hands-on simulation.

Built for students and educators who struggle with abstract physics concepts, PhyxHub provides a visual, interactive environment where learners can manipulate variables and observe real-time outcomes.

The platform bridges the gap between theoretical physics and practical understanding by allowing users to experiment with physics simulations in a controlled, visual environment.`,
    problem: `Traditional physics education often relies on static diagrams and mathematical formulas that can feel disconnected from real-world applications. Students struggle to visualize how changing one variable affects an entire system.

Many existing educational tools are either too simplistic or require expensive software licenses, making them inaccessible to many students and educators.`,
    solution: `PhyxHub addresses this by providing browser-based physics simulations that are both interactive and accessible. Students can adjust parameters in real-time and immediately see the effects, creating a direct feedback loop between theory and observation.

The platform uses modern web technologies to deliver smooth, responsive simulations that run directly in the browser without requiring downloads or installations.`,
    features: [
      "Real-time physics simulations with adjustable parameters",
      "Interactive visualizations that respond to user input",
      "Browser-based access with no installation required",
      "Responsive design for desktop and mobile devices",
      "Progressive learning paths for different skill levels",
    ],
    techBreakdown: {
      frontend: ["React", "Tailwind CSS"],
      backend: ["Express", "Node.js"],
      database: ["MongoDB"],
    },
  },
  {
    id: "fractals-of-entropy",
    slug: "fractals-of-entropy",
    number: "02",
    title: "Fractals of Entropy",
    subtitle: "Top-Down Survival Shooter",
    description:
      "A stylized Android survival shooter focused on fast-paced combat, resource collection, mission progression, and customizable weapon loadouts.",
    industry: ["Gaming", "Mobile", "Action"],
    technologies: ["C#", "Unity", "Android", "Autodesk Maya"],
    image: fractalsImage,
    href: "https://github.com/maximilianvincentius/fractals-of-entropy",
    type: ProjectType.REPOSITORY,
    overview: `Fractals of Entropy is a stylized top-down survival shooter for Android. Built with Unity and C#, the game focuses on fast-paced combat encounters, resource collection, mission progression, and deep weapon customization.

Players navigate procedurally influenced arenas, managing health, ammo, and upgrades while enemies scale in difficulty. The game emphasizes tight controls and satisfying combat feedback in a mobile-first form factor.`,
    problem: `Mobile shooters often sacrifice depth for accessibility. Most titles on the Android platform offer either simplified tap-to-win mechanics or overly complex controls that don't translate well to touch screens.

There was a gap for a game that delivers genuine skill-based combat, meaningful progression systems, and loadout customization without requiring a controller or compromising on mobile usability.`,
    solution: `Fractals of Entropy bridges this gap with a control scheme optimized for touch input — virtual joystick movement with aim-assist mechanics that feel responsive without being automated.

The weapon loadout system gives players meaningful choices: each weapon class has distinct trade-offs in damage, fire rate, and resource cost. Mission progression ties directly into loadout unlocks, creating a satisfying gameplay loop where combat skill is rewarded with broader tactical options.`,
    features: [
      "Fast-paced top-down survival combat optimized for touch controls",
      "Customizable weapon loadouts with distinct class trade-offs",
      "Mission-based progression system with escalating difficulty",
      "Resource collection and upgrade paths tied to combat performance",
      "Stylized visual design with smooth performance on mid-range Android devices",
    ],
    techBreakdown: {
      frontend: ["Unity", "C#"],
      backend: ["Unity"],
      other: ["Autodesk Maya", "Android SDK"],
    },
    privacyPolicy: fractalsOfEntropyPrivacyPolicy,
  },
  {
    id: "metro-circuit",
    slug: "metro-circuit",
    number: "03",
    title: "Metro Circuit",
    subtitle: "Racing Game",
    description:
      "Metro Circuit is an Android puzzle-exploration game created. Players explore a stylized futuristic city, follow mission objectives, move boxes, activate pressure plates and targets, complete puzzle stages, and unlock new areas.",
    industry: ["Gaming", "Mobile", "Action"],
    technologies: ["C#", "Unity", "Android", "Autodesk Maya"],
    image: metroCircuitImage,
    href: "https://github.com/maximilianvincentius/metro-circuit",
    type: ProjectType.REPOSITORY,
    overview: `Metro Circuit is a puzzle-exploration game for Android set in a stylized futuristic city. Players navigate interconnected environments, solving spatial puzzles by moving boxes, activating pressure plates, and triggering targets to unlock new areas.

The game combines exploration with logic-based puzzle mechanics, encouraging players to observe their environment and experiment with interactive elements to progress.`,
    problem: `Puzzle games on mobile often fall into two extremes: overly casual match-three mechanics, or ported PC puzzle designs with interfaces that feel clunky on touch devices.

There was an opportunity to create a 3D puzzle-exploration experience designed natively for mobile — one that rewards spatial reasoning and curiosity without relying on abstract grid puzzles or tap-to-solve mechanics.`,
    solution: `Metro Circuit delivers a 3D environment where puzzles are embedded in the world itself. Players physically navigate spaces, push objects, and interact with environmental mechanisms — making puzzle-solving feel tangible rather than abstract.

The progression system gates new areas behind completed puzzle stages, creating a natural exploration loop. Each zone introduces new mechanics layered onto existing ones, keeping the challenge fresh without overwhelming the player.`,
    features: [
      "3D puzzle-exploration in a stylized futuristic city",
      "Environmental puzzle mechanics: boxes, pressure plates, targets",
      "Zone-based progression with gated unlocks",
      "Layered mechanic introduction across stages",
      "Touch-optimized controls for 3D navigation and interaction",
    ],
    techBreakdown: {
      frontend: ["Unity", "C#"],
      backend: ["Unity"],
      other: ["Autodesk Maya", "Android SDK"],
    },
    privacyPolicy: metroCircuitPrivacyPolicy,
  },
  {
    id: "toastator",
    slug: "toastator",
    number: "04",
    title: "Toastator",
    subtitle: "Puzzle Game",
    description:
      "Toastator is a stylized, kitchen-themed game featuring a chef character, bread and crouton enemies, and a toaster boss. Its visual collection includes playable-character designs, weapon concepts, collectible items, kitchen environments, skill illustrations, combat effects, and game interface artwork.",
    industry: ["Gaming", "Action", "Mobile"],
    technologies: ["C#", "Unity", "Adobe Photoshop"],
    image: toastatorImage,
    href: "https://github.com/maximilianvincentius/toastator",
    type: ProjectType.REPOSITORY,
    overview:
      "Toastator is a logic and puzzle-solving game designed to challenge players through progressively difficult stages. Players must observe their environment, utilize specific game mechanics, and experiment with interactive elements to clear levels and unlock new content.\n\nThe game balances intuitive controls with deep spatial puzzles, encouraging curiosity and strategic thinking.",
    problem:
      "Many puzzle games often fall into repetitive loops or lack a distinct thematic identity, making it difficult to keep players engaged over longer play sessions. There was a need for a puzzle experience that introduces a unique charm while gradually layering complex mechanics without overwhelming the player.",
    solution:
      "Toastator delivers a focused puzzle experience where mechanics are introduced organically. By grounding the puzzles in a distinct theme and providing clear, tangible interactions, the game makes solving each stage feel highly rewarding.\n\nThe progression system gates new areas behind completed puzzle stages, ensuring a natural learning curve where each new zone builds upon the mechanics learned in previous levels.",
    features: [
      "Engaging logic-based puzzle mechanics",
      "Progressive difficulty curve with layered challenges",
      "Stage-based progression and level unlocks",
      "Distinct thematic visual style",
      "Intuitive interactions and controls",
    ],
    techBreakdown: {
      frontend: ["Unity", "C#"],
      backend: [],
      other: ["Android SDK"]
    },
    privacyPolicy: toastatorPrivacyPolicy,
  },
];
