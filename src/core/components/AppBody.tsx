import React from "react";
import { Route, Routes, Link } from 'react-router-dom';
import {DiaryEntryPage} from '../../features/diary_entry';
import { SearchDiariesPage } from "../../features/diary_entry";
import {ProgressPage} from "../../shared/progress-page/ProgressPage";
import '../styles/AppBody.css';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export function AppBody() {
  const [entityName, setEntityName] = useState('');
  const currentEntityName = useSelector((state: RootState) => state.namePrompt.name);

  useEffect(() => {
    setEntityName(currentEntityName ?? '');
  }, [currentEntityName]);

  return (
      <div className="app-body">
        <div className="app-body-main">
          <Routes>
            <Route path="/" element={<SearchDiariesPage/>} />
            <Route path="/journal" element={<DiaryEntryPage entityName={entityName}/>} />
          </Routes>
        </div>
      </div>
  );
}
