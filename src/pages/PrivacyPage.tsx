import React from 'react';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-background pt-20 pb-12">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="mb-8 text-4xl font-bold">Privacy Policy</h1>
        <div className="prose prose-lg">
          {/* Insert extracted content here */}
          <p>Privacy Policy for Metro Circuit</p>
          <p>Effective Date: [Insert Date]</p>
          <p>This Privacy Policy describes how we collect, use, and protect your personal information when you use our services.</p>
          <h2>Information We Collect</h2>
          <p>We collect information that you provide directly to us, such as when you create an account, contact us, or use our services.</p>
          <h2>How We Use Your Information</h2>
          <p>We use your information to provide, maintain, and improve our services, communicate with you, and comply with legal obligations.</p>
          <h2>Data Security</h2>
          <p>We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, or destruction.</p>
          <h2>Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>
          <h2>Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at privacy@pointxtech.com.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;