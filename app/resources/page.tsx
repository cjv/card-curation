export const metadata = {
  title: 'Resources - Your Site Name',
  description: 'Guides and resources to help you get started',
};

export default function ResourcesPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="font-serif font-bold text-4xl text-charcoal mb-6">
        Resources
      </h1>

      <p className="text-xl text-earth mb-8">
        Curated guides and resources to help you on your journey.
      </p>

      <div className="space-y-8">
        <section className="bg-cream rounded-lg p-6 shadow-md">
          <h2 className="font-serif font-semibold text-2xl text-charcoal mb-4">
            Guide Category 1
          </h2>
          <p className="text-earth mb-4">
            Description of this guide category and what users will find here.
          </p>
          <div className="space-y-3">
            <div className="border-l-4 border-bean pl-4">
              <h3 className="font-semibold text-charcoal mb-1">Guide Title 1</h3>
              <p className="text-sm text-earth">
                Content coming soon: Brief description of this guide.
              </p>
            </div>
            <div className="border-l-4 border-bean pl-4">
              <h3 className="font-semibold text-charcoal mb-1">Guide Title 2</h3>
              <p className="text-sm text-earth">
                Content coming soon: Brief description of this guide.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-cream rounded-lg p-6 shadow-md">
          <h2 className="font-serif font-semibold text-2xl text-charcoal mb-4">
            Guide Category 2
          </h2>
          <p className="text-earth mb-4">
            Description of this guide category and what users will find here.
          </p>
          <div className="space-y-3">
            <div className="border-l-4 border-squash pl-4">
              <h3 className="font-semibold text-charcoal mb-1">Guide Title 1</h3>
              <p className="text-sm text-earth">
                Content coming soon: Brief description of this guide.
              </p>
            </div>
            <div className="border-l-4 border-squash pl-4">
              <h3 className="font-semibold text-charcoal mb-1">Guide Title 2</h3>
              <p className="text-sm text-earth">
                Content coming soon: Brief description of this guide.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-cream rounded-lg p-6 shadow-md">
          <h2 className="font-serif font-semibold text-2xl text-charcoal mb-4">
            Guide Category 3
          </h2>
          <p className="text-earth mb-4">
            Description of this guide category and what users will find here.
          </p>
          <div className="space-y-3">
            <div className="border-l-4 border-sage pl-4">
              <h3 className="font-semibold text-charcoal mb-1">Guide Title 1</h3>
              <p className="text-sm text-earth">
                Content coming soon: Brief description of this guide.
              </p>
            </div>
            <div className="border-l-4 border-sage pl-4">
              <h3 className="font-semibold text-charcoal mb-1">Guide Title 2</h3>
              <p className="text-sm text-earth">
                Content coming soon: Brief description of this guide.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
