import profileImg from "./public/profile.jpg";
import stackOverflowImg from "./public/decentralized-stackoverflow.webp";
import solanaAdsImg from "./public/solana-ads.jpg";

export const portfolio = {
  about: {
    firstName: "Mattia",
    lastName: "Mennonna",
    img: profileImg,
    bio: `Hi, ich bin Mattia! 

    ich bin begeistert, mich als Music Supervisor bei ROBA Production Music zu bewerben. Als leidenschaftlicher Musikliebhaber und erfahrener Branchenexperte bin ich davon überzeugt, dass ich ein wertvolles Mitglied Ihres Teams sein kann.

    ROBA Production Music hat sich einen Namen als führender Anbieter von Musiklizenzen für Film, Fernsehen und andere Medien gemacht. Ich bin begeistert von der Möglichkeit, mit einem Unternehmen zusammenzuarbeiten, das sich der Qualität und Kreativität in der Musik verschrieben hat. Als Music Supervisor würde ich eine Schlüsselrolle bei der Auswahl und Bereitstellung von Musik für Ihre Kunden spielen und dazu beitragen, dass Ihre Projekte einzigartig und unvergesslich sind.
    
    Ich verfüge über umfangreiche Erfahrung in der Musikbranche, die ich in der Lage bin, in meine Arbeit als Music Supervisor zu integrieren. Ich habe bereits mit zahlreichen Künstlern und Produzenten zusammengearbeitet, um Musik für Film- und Fernsehprojekte zu erstellen. Meine Fähigkeiten in der Musikrecherche und -auswahl sowie meine Fähigkeit, mit Künstlern und Kunden zusammenzuarbeiten, machen mich zu einem starken Kandidaten für die Position des Music Supervisors bei ROBA Production Music.
    
    Ich bin überzeugt, dass meine Leidenschaft für Musik und meine Erfahrung in der Branche mich zu einem wertvollen Mitglied Ihres Teams machen werden. Ich bin bereit, hart zu arbeiten und alles zu tun, um sicherzustellen, dass ROBA Production Music weiterhin der führende Anbieter von Musiklizenzen bleibt.
    
    Vielen Dank für Ihre Berücksichtigung meiner Bewerbung. Ich freue mich darauf, von Ihnen zu hören.`,
    skills: ["Ableton", "ROBA", "Viola", "Fender", "Yamaha", "lambda-Labs"],
  },
  projects: [
    {
      name: "Decentralized Stack Overflow",
      img: stackOverflowImg,
      tools: ["NextJS", "TypeScript", "Solidity", "Polygon"],
      url: "https://pointer.gg",
      description: `In this project, I built a decentralized forum via Polygon that allows users to post and answer programming related questions.

Users can post a question for a small fee at which time they also offer a reward amount to incentivize answers.

Other users can pay a small fee to answer the question and make them eligible for the reward. Those answering must pay a small fee to prevent them from spamming questions with poor quality answers.

For 1 month answers to a question will be hidden, but interested parties can pay a small fee to see the answers and upvote them.

After this month has passed, the user with the most upvoted answer will receive the allocated reward.`,
    },
    {
      name: "Ad Slots Via Solana",
      img: solanaAdsImg,
      tools: ["NextJS", "TypeScript", "Rust", "Solana"],
      url: "https://pointer.gg",
      description: `In this project I built a smart contract and UI to allow users to purchase ad slots on my blog.

My dev/design blog brings in 1k unique hits per day and provides unique exposure to top developers and designers.

This gives users the opportunity to advertise to a highly educated and passionate community.

Ads can be scheduled through a calendar and purchased in the app, though must be approved before they will display, therefore it's advisable not to schedule an ad to run immediately after purchase.`,
    },
  ],
};

