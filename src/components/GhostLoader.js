import { PlaceholderParagraph } from "@innovaccer/design-system";

function GhostLoader({ count }) {
  return new Array(count).fill(1).map((_, index) => (
    <div className="border-bottom px-5 py-4" key={index}>
      <div className="d-flex justify-content between mb-4">
        <PlaceholderParagraph length="large" className="mr-4 flex-3" />
        <PlaceholderParagraph length="medium" className="flex-2" />
      </div>
      <PlaceholderParagraph length="medium" />
    </div>
  ));
}

export default GhostLoader;
