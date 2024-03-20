import React from "react";
import {DiaryEntryPage} from '../../features/diary_entry';
import { SearchDiariesPage } from "../../features/diary_entry";
import '../styles/AppBody.css';

export function AppBody() {
  return (
      <div className="app-body">
        <div className="app-body-main">
          <DiaryEntryPage searchTerm="John Malkovich"/>
        </div>
      </div>
  );
}
