import { createFileRoute } from "@tanstack/react-router";
import Landing from "@/components/landing/Landing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kloyya — One brain, every decision" },
      {
        name: "description",
        content:
          "Kloyya is an AI Chief of Staff that reads your inbox, chats, tasks and CRM, connects the threads, and hands you the decision.",
      },
      { property: "og:title", content: "Kloyya — One brain, every decision" },
      {
        property: "og:description",
        content:
          "An autonomous AI Chief of Staff connecting Gmail, Slack, WhatsApp, Notion, Jira and your CRM into one decision.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});
