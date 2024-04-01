import React from "react";
import {DiaryEntryPage} from '../../features/diary_entry';
import { SearchDiariesPage } from "../../features/diary_entry";
import '../styles/AppBody.css';
import { useEffect } from "react";

export function AppBody() {
  let currentTabTitle = 'Search Entries'
  useEffect(() => {
    document.title = `MNEMO | ${currentTabTitle}`
  }, []);
  return (
      <div className="app-body">
        <div className="app-body-main">
          <SearchDiariesPage/>
        </div>
      </div>
  );
}
