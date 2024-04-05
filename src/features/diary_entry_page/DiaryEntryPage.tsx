import React, { useEffect } from 'react'
import QuoteCard from '../../shared/quote-card/QuoteCard'
import { EXAMPLE_QUOTE } from '../../testing/example_quote';
import styles from './DiaryEntryPage.module.css';
import { BackButton } from '../../shared/back-button/BackButton';
import { DiaryEntryTitle } from '../../shared/diary-entry-title/DiaryEntryTitle';
import { ProgressPage } from '../../shared/progress-page/ProgressPage';
import { useSelector } from 'react-redux';
import { RootState } from '../../core/store/store';

export function DiaryEntryPage(props: {entityName: string|undefined}) {
    const {entityName} = props;
    const backLink = '/'; // TODO: Replace with actual back link
    const [isLoading, setIsLoading] = React.useState(true);
    const loadingStatus = useSelector((state: RootState) => state.journalEntries.loading);

    useEffect(() => {
        setIsLoading(loadingStatus);
        if(loadingStatus) {
            document.title = 'MNEMO | Making magic happen...'
        } else {
            document.title = `MNEMO | The Journal of ${entityName}`;
        }
    }, [loadingStatus]);

    if(!isLoading) {
        return (
            <div className={styles['container']}>
                <div className={styles['page-header']}>
                    <div className={styles['back-button-container']}>
                        <BackButton buttonText='BACK TO SEARCH' destination={backLink}/>
                    </div>
                    <div className={styles['diary-entry-title']}>
                        <DiaryEntryTitle entityName={entityName}/>
                    </div>
                </div>
                <div className={styles['quote-card-container']}>
                    <QuoteCard quote={EXAMPLE_QUOTE} entityName={entityName}/>
                </div>
            </div>
        );
    }
    return <ProgressPage entityName={entityName}/>;
}