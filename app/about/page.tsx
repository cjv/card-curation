export const metadata = {
  title: 'About - Your Site Name',
  description: 'Learn about our mission and what we offer',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="font-serif font-bold text-4xl text-charcoal mb-6">
        About Your Site Name
      </h1>

      <div className="prose prose-lg max-w-none space-y-6 text-foreground">
        <p className="text-xl leading-relaxed">
          Welcome to Your Site Name, a curated collection dedicated to organizing and sharing quality content.
        </p>

        <h2 className="font-serif font-semibold text-2xl text-charcoal mt-8">
          Our Mission
        </h2>
        <p className="leading-relaxed">
          Add your mission statement here. Describe what makes your collection unique and what value you provide to visitors.
        </p>

        <h2 className="font-serif font-semibold text-2xl text-charcoal mt-8">
          What You'll Find Here
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Item category or type 1</li>
          <li>Item category or type 2</li>
          <li>Item category or type 3</li>
          <li>Item category or type 4</li>
          <li>Item category or type 5</li>
          <li>Item category or type 6</li>
        </ul>

        <h2 className="font-serif font-semibold text-2xl text-charcoal mt-8">
          Finding Items
        </h2>
        <p className="leading-relaxed">
          Add information about how users can find or acquire items from your collection. Include any helpful tips or resources.
        </p>

        <div className="bg-cream rounded-lg p-6 mt-8">
          <h3 className="font-serif font-semibold text-xl text-charcoal mb-3">
            About the Curator
          </h3>
          <p className="leading-relaxed text-earth">
            This site is maintained by [Your Name], a [Your Credentials/Affiliation].
            Add your personal story and qualifications here to establish trust and authority.
          </p>
        </div>
      </div>
    </div>
  );
}
