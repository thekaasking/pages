import { defineMarkdocConfig, nodes, component } from "@astrojs/markdoc/config";

export default defineMarkdocConfig({
  tags: {
    details: {
      render: component("./src/components/Details.astro"),
      children: nodes.document.children,
    },
    summary: {
      render: component("./src/components/Summary.astro"),
      children: nodes.document.children,
    },
    sup: {
      render: component("./src/components/Sup.astro"),
      children: nodes.strong.children,
    },
    sub: {
      render: component("./src/components/Sub.astro"),
      children: nodes.strong.children,
    },
    abbr: {
      render: component("./src/components/Abbr.astro"),
      attributes: {
        title: { type: String },
      },
      children: nodes.strong.children,
    },
    kbd: {
      render: component("./src/components/Kbd.astro"),
      children: nodes.strong.children,
    },
    mark: {
      render: component("./src/components/Mark.astro"),
      children: nodes.strong.children,
    },
    youtube: {
      render: component("./src/components/YouTubeEmbed.astro"),
      attributes: {
        url: { type: String, required: true },
        label: { type: String, required: true },
      },
      selfClosing: true,
    },
    tweet: {
      render: component("./src/components/TweetEmbed.astro"),
      attributes: {
        url: { type: String, required: true },
      },
      selfClosing: true,
    },
    codepen: {
      render: component("./src/components/CodePenEmbed.astro"),
      attributes: {
        url: { type: String, required: true },
        title: { type: String, required: true },
      },
      selfClosing: true,
    },
    githubgist: {
      render: component("./src/components/GitHubGistEmbed.astro"),
      attributes: {
        id: { type: String, required: true },
      },
      selfClosing: true,
    },
  },
  nodes: {
    heading: {
      render: component("./src/components/Heading.astro"),
      attributes: {
        level: { type: Number, required: true },
      },
    },
    fence: {
      render: component("./src/components/CodeBlock.astro"),
      attributes: {
        content: { type: String, render: false, required: true },
        language: { type: String, default: "typescript" },
        process: { type: Boolean, render: false, default: false },
      },
    },
  },
});