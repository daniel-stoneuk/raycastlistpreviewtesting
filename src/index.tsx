import { ActionPanel, Detail, List, Action } from "@raycast/api";

export default function Command() {
  let content = "";
  for (let i = 0; i < 100; i++) {
    content += "Hello world\n";
  }

  return (
    <List isShowingDetail>
      <List.Item
        icon="list-icon.png"
        title="Greeting"
        detail={<List.Item.Detail markdown={"```\n" + content + "\n```"} />}
      />
    </List>
  );
}
