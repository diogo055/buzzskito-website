import { redirect } from 'next/navigation'

// GoDaddy used /home as the homepage URL. Redirect permanently to / to preserve
// any inbound links while consolidating PageRank to the canonical homepage.
export default function HomeLegacyRedirect() {
  redirect('/')
}
