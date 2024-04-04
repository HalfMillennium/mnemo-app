import React from "react";
import {DiaryEntryPage} from '../../features/diary_entry';
import { SearchDiariesPage } from "../../features/diary_entry";
import {ProgressPage} from "../../shared/progress-page/ProgressPage";
import '../styles/AppBody.css';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export function AppBody(props: {pageState: number}) {
  const [currentTabTitle, setCurrentTabTitle] = useState('Search Entries');
  const [currentPage, setCurrentPage] = useState(<SearchDiariesPage/>);

  const currentEntityName = useSelector((state: RootState) => state.namePrompt.name);

  useEffect(() => {
    updatePage();
  }, [props.pageState, currentEntityName]);
  return (
      <div className="app-body">
        <div className="app-body-main">
          {currentPage}
        </div>
      </div>
  );

  function updatePage() {
    if(props.pageState === 1 && currentEntityName) {
      setCurrentTabTitle('Diary Entry');
      setCurrentPage(<DiaryEntryPage entityName={currentEntityName}/>);
    } else if(props.pageState === 2 && currentEntityName) {
      setCurrentTabTitle('Making magic happen...');
      setCurrentPage(<ProgressPage entityName={currentEntityName}/>);
    }
    document.title = `MNEMO | ${currentTabTitle}`;
  }
}
