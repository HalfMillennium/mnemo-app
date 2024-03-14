import React from "react";
import {DiaryEntryPage} from '../../features/diary_entry';
import { SearchDiaryPage } from "../../features/diary_entry";
import '../styles/AppBody.css';

export function AppBody() {
  const searchTerm = "Taylor Swift";
  return (
      <div className="app-body">
        <div className="app-body-main">
            <SearchDiaryPage/>
        </div>
      </div>
  );
}
