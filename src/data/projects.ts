import { ProjectType } from "../constants/index.ts";
import phyxhubImage from "@/assets/phyxhub.webp";
import fractalsImage from "@/assets/fractals.webp";
import metroCircuitImage from "@/assets/metro-circuit.webp";
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
    privacyPolicy: `# Privacy Policy for Fractals of Entropy
# Effective Date: September 24, 2026

Fractals of Entropy is an Android game developed and published by Maximilian Vincentius ("Developer," "we," "us," or "our").

This Privacy Policy explains how information is handled when users install and play Fractals of Entropy.

## 1. Information Entered by the Player
Fractals of Entropy allows players to create a local game profile by entering a player name. The player name is used only to identify the player's saved profile inside the game. It is stored locally on the user's device and is not transmitted to, collected by, or accessible to the Developer through an online server.

Players should avoid using sensitive personal information as their in-game profile name.

## 2. Information We Do Not Collect
Fractals of Entropy does not require users to create an online account. The game does not directly collect or transmit personal information such as: email addresses, phone numbers, precise or approximate location, contacts, photographs or videos, audio recordings, payment information, device identifiers, advertising identifiers, or browsing and search history. The game does not track users across other applications or websites.

## 3. Local Game Data
Fractals of Entropy stores gameplay information locally on the user's device. This may include: player profile name, locally generated profile identifier, profile creation and last-played time, game progress, completed missions, player position, collected coins and items, unlocked or purchased weapons, weapon upgrades, selected character skins, game settings and preferences, and other gameplay-related save data. This information is used only to provide game functionality, manage local profiles, and preserve gameplay progress. The Developer does not receive or access this locally stored information through an online server.

## 4. Analytics, Advertising, and Crash Reporting
Fractals of Entropy does not use third-party analytics services, advertising services, personalized advertising, or online crash-reporting services. The game does not contain advertisements and does not use advertising SDKs.

## 5. Internet Connection
Fractals of Entropy does not require an internet connection for its core gameplay and does not use an internet connection to transmit player profile information or game progress to the Developer. An internet connection may still be required by Google Play to download, install, verify, or update the game. Information processed independently by Google Play is governed by Google's own privacy policies.

## 6. Information Sharing
The Developer does not sell, rent, or share users' personal information with third parties. Because the game does not transmit locally stored profile or gameplay information to the Developer, this information is not shared with third parties by the Developer. Google Play may independently process technical, diagnostic, transaction, or device information while providing its platform services. Google's Privacy Policy is available at: https://policies.google.com/privacy

## 7. Data Storage and Security
Player profile and gameplay information is stored locally on the user's device using the game's local storage system. Users are responsible for maintaining the security of their devices. Although reasonable measures are taken to prevent unintended access, no electronic storage method can be guaranteed to be completely secure.

## 8. Data Retention and Deletion
Local profile and gameplay information remains on the user's device until it is deleted. Players may delete their information by: deleting the relevant profile from within the game, where this feature is available; clearing Fractals of Entropy's application storage through Android device settings; or uninstalling Fractals of Entropy from the device. Because Fractals of Entropy does not provide online user accounts or store information on the Developer's servers, no separate online account-deletion request is required.

## 9. Children's Privacy
Fractals of Entropy does not knowingly collect or transmit personal information from children. Player names and gameplay progress are stored locally on the device and are not transmitted to the Developer. Parents and guardians are encouraged to supervise children's use of the game and ensure that sensitive personal information is not used as a player profile name.

## 10. Third-Party Platform
Fractals of Entropy is distributed through Google Play. Google Play operates independently from the game and may process information according to Google's own terms and privacy policies. The Developer is not responsible for the independent privacy practices of third-party platforms.

## 11. Changes to This Privacy Policy
This Privacy Policy may be updated if the game's functionality, third-party services, data practices, or legal requirements change. Changes will be published on this page, and the effective date shown above will be updated. Users are encouraged to review this Privacy Policy periodically.

## 12. Contact Us
If you have questions, concerns, or requests regarding this Privacy Policy or Fractals of Entropy, please contact:

Developer: Maximilian Vincentius
Game: Fractals of Entropy
Email: mv@pointxtech.com`,
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
    privacyPolicy: `# Privacy Policy for Metro Circuit
# Effective Date: September 24, 2026

Metro Circuit is an Android game developed and published by Maximilian Vincentius ("Developer," "we," "us," or "our").

This Privacy Policy explains how information is handled when users install and play Metro Circuit.

## 1. Information We Do Not Collect
Metro Circuit does not require users to create an online account or provide personal information. The game does not directly collect or transmit personal information such as: names or email addresses, phone numbers, precise or approximate location, contacts, photographs or videos, audio recordings, payment information, device identifiers, advertising identifiers, or browsing and search history. Metro Circuit does not track users across other applications or websites.

## 2. Local Game Data
Metro Circuit may store gameplay information locally on the user's device, including: game progress, completed levels and missions, puzzle completion status, unlocked areas, game settings and preferences, control settings, and other gameplay-related save information. This information is used only to provide game functionality and preserve gameplay progress. The information remains on the user's device and is not transmitted to, collected by, or accessible to the Developer through an online server.

## 3. Analytics, Advertising, and Crash Reporting
Metro Circuit does not use third-party analytics services, advertising services, personalized advertising, or online crash-reporting services. The game does not contain advertisements and does not use advertising SDKs.

## 4. Internet Connection
Metro Circuit does not require an internet connection for its core gameplay and does not use an internet connection to send gameplay information to the Developer. An internet connection may be required by Google Play to download, install, verify, or update the game. Information processed independently by Google Play is governed by Google's own privacy policies.

## 5. Information Sharing
The Developer does not sell, rent, or share users' personal information with third parties. Because Metro Circuit does not transmit locally stored gameplay information to the Developer, this information is not shared with third parties by the Developer. Google Play may independently process technical, diagnostic, transaction, or device information while providing its platform services. Google's Privacy Policy is available at: https://policies.google.com/privacy

## 6. Data Storage and Security
Gameplay information is stored locally on the user's device using the game's local storage system. Users are responsible for maintaining the security of their devices. Although reasonable measures are taken to prevent unintended access, no electronic storage method can be guaranteed to be completely secure.

## 7. Data Retention and Deletion
Local gameplay information remains on the user's device until it is deleted. Users may delete locally stored information by: using a reset or deletion feature within the game, where available; clearing Metro Circuit's application storage through Android device settings; or uninstalling Metro Circuit from the device. Because Metro Circuit does not provide online user accounts or store user information on the Developer's servers, no separate online account-deletion request is required.

## 8. Children's Privacy
Metro Circuit does not knowingly collect or transmit personal information from children. Gameplay information is stored locally on the device and is not transmitted to the Developer. Parents and guardians are encouraged to supervise children's use of the game.

## 9. Third-Party Platform
Metro Circuit is distributed through Google Play. Google Play operates independently from the game and may process information according to Google's own terms and privacy policies. The Developer is not responsible for the independent privacy practices of third-party platforms.

## 10. Changes to This Privacy Policy
This Privacy Policy may be updated if the game's functionality, third-party services, data practices, or legal requirements change. Changes will be published on this page, and the effective date shown above will be updated. Users are encouraged to review this Privacy Policy periodically.

## 11. Contact Us
If you have questions, concerns, or requests regarding this Privacy Policy or Metro Circuit, please contact:

Developer: Maximilian Vincentius
Game: Metro Circuit
Email: mv@pointxtech.com`,
  },
];
