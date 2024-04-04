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
    if(currentEntityName) {
      switch(props.pageState) {
        case 1:
          setCurrentTabTitle('Diary Entry');
          setCurrentPage(<DiaryEntryPage entityName={currentEntityName}/>);
          break;
        case 2:
          setCurrentTabTitle('Making magic happen...');
          setCurrentPage(<ProgressPage entityName={currentEntityName}/>);
          break;
        default:
      }
      document.title = `MNEMO | ${currentTabTitle}`;
    }
  }
}
