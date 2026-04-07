import React from 'react'
import { Link } from 'react-router-dom'

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <Link to="/">
            <img
              className="w-16 mb-6"
              src="https://cdn.brandfetch.io/ididNbiiOd/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1667562044439"
              alt="Uber Clone"
            />
          </Link>
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Privacy Policy</h1>
          <p className="text-sm text-slate-600">Last updated: April 6, 2026</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Introduction</h2>
            <p className="text-slate-700 leading-relaxed">
              We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Information We Collect</h2>
            <p className="text-slate-700 leading-relaxed mb-4">We may collect information about you in a variety of ways. The information we may collect on the Platform includes:</p>
            <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4">
              <li>Personal identification information (name, email address, phone number, etc.)</li>
              <li>Billing and payment information</li>
              <li>Location data</li>
              <li>Device information and usage data</li>
              <li>Communications with our support team</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. Use of Your Information</h2>
            <p className="text-slate-700 leading-relaxed mb-4">Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Platform to:</p>
            <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4">
              <li>Fulfill or meet the reason for which the information is provided</li>
              <li>Generate a personal profile about you</li>
              <li>Increase the efficiency and operation of the Platform</li>
              <li>Monitor and analyze usage and trends</li>
              <li>Notify you of updates to the Platform</li>
              <li>Process payments and refunds</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Disclosure of Your Information</h2>
            <p className="text-slate-700 leading-relaxed">
              We may share your information in the situations described in this section. However, we are not in the business of selling your information to third parties for their marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Security of Your Information</h2>
            <p className="text-slate-700 leading-relaxed">
              We use administrative, technical, and physical security measures to protect your personal information. However, the transmission of information via the internet is never completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Contact Us</h2>
            <p className="text-slate-700 leading-relaxed">
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <p className="text-slate-700 leading-relaxed mt-4">
              Email: privacy@uberclone.com<br />
              Address: 123 Tech Street, San Francisco, CA 94105
            </p>
          </section>
        </div>

        {/* Back Button */}
        <div className="mt-8">
          <Link
            to="/"
            className="inline-block bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
