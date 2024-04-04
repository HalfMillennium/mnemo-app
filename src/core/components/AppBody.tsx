import React from "react";
import {DiaryEntryPage} from '../../features/diary_entry';
import { SearchDiariesPage } from "../../features/diary_entry";
import {ProgressPage} from "../../shared/progress-page/ProgressPage";
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
          <ProgressPage entityName="John Malkovich"/>
        </div>
      </div>
  );
}
