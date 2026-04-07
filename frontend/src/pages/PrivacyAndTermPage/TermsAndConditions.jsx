import React from 'react'
import { Link } from 'react-router-dom'

const TermsAndConditions = () => {
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
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Terms and Conditions</h1>
          <p className="text-sm text-slate-600">Last updated: April 6, 2026</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Agreement to Terms</h2>
            <p className="text-slate-700 leading-relaxed">
              By accessing and using this Platform, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Use License</h2>
            <p className="text-slate-700 leading-relaxed mb-4">Permission is granted to temporarily download one copy of the materials (information or software) on our Platform for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4">
              <li>Modifying or copying the materials</li>
              <li>Using the materials for any commercial purpose or for any public display</li>
              <li>Attempting to modify, translate, adapt, disassemble, decompile, or reverse engineer any software on the Platform</li>
              <li>Removing any copyright or other proprietary notations from the materials</li>
              <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. Disclaimer</h2>
            <p className="text-slate-700 leading-relaxed">
              The materials on our Platform are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Limitations</h2>
            <p className="text-slate-700 leading-relaxed">
              In no event shall our company or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our Platform, even if we or our authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Accuracy of Materials</h2>
            <p className="text-slate-700 leading-relaxed">
              The materials appearing on our Platform could include technical, typographical, or photographic errors. We do not warrant that any of the materials on our Platform are accurate, complete, or current. We may make changes to the materials contained on our Platform at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Links</h2>
            <p className="text-slate-700 leading-relaxed">
              We have not reviewed all of the sites linked to our Platform and are not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us of the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Modifications</h2>
            <p className="text-slate-700 leading-relaxed">
              We may revise these terms of use for our Platform at any time without notice. By using this Platform, you are agreeing to be bound by the then current version of these terms of use.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">8. Governing Law</h2>
            <p className="text-slate-700 leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction where the service is provided, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">9. Contact Information</h2>
            <p className="text-slate-700 leading-relaxed">
              If you have any questions about these Terms and Conditions, please contact us at:
            </p>
            <p className="text-slate-700 leading-relaxed mt-4">
              Email: support@uberclone.com<br />
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

export default TermsAndConditions
