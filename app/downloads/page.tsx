export const metadata = {
  title: 'Downloads - Your Site Name',
  description: 'Free materials and resources available for download',
};

export default function DownloadsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="font-serif font-bold text-4xl text-charcoal mb-6">
        Downloads
      </h1>

      <p className="text-xl text-earth mb-8">
        Free materials and resources available for download.
      </p>

      <div className="space-y-6">
        <div className="bg-cream rounded-lg p-6 shadow-md">
          <p className="text-earth">
            Download materials will be added here. These might include:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-earth">
            <li>Resource lists and guides</li>
            <li>Reference materials</li>
            <li>Educational content</li>
            <li>Supplementary documents</li>
          </ul>
        </div>

        <div className="bg-squash-light/30 border-l-4 border-squash p-4 rounded">
          <p className="text-earth-brown">
            <strong>Note:</strong> All materials respect copyright and are either created by the curator or are in the public domain.
          </p>
        </div>
      </div>
    </div>
  );
}
