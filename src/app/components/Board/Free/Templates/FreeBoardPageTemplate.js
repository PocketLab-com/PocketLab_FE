// src/app/components/BoardFree/Templates/FreeBoardPageTemplate/FreeBoardPageTemplate.js

import NavBar from "@/app/components/common/Organisms/NavBar/NavBar";
import FreeBoardListTable from "@/app/components/Board/Free/Organisms/FreeBoardListTable/FreeBoardListTable";

export default function FreeBoardPageTemplate() {
  return (
    <div>
      <NavBar />
      <FreeBoardListTable />
    </div>
  );
}