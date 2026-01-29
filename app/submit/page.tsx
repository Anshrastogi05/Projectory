import SectionHeader from "@/components/common/section-header";

import { SparkleIcon } from "lucide-react";

export default function SubmitPage() {
  return (
    <div className="wrapper">
      <SectionHeader
        title="Submit Your project"
        Icon={SparkleIcon}
        description="Share your creation with the community. Your submission will be reviewed before it goes live."
      />
    </div>
  );
}
