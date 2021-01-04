import React from 'react';
import CurrencyPortfolio from './CurrencyPortfolio/CurrencyPortfolio';
import Profile from './Profile/Profile';
import Transactions from './Transactions/Transactions';
import LeftMenu from '../LeftMenu/LeftMenu';
import Footer from '../Footer/Footer';
import Graph from './Graph/GraphWrapper';

const Dashboard = (props) => {
      return (
        <div className="container-fluid pt-30">
            <LeftMenu />
            <div className="dashboard row">
                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                    <Graph
                        graphHeaderData={{
                            left: props.performanceTotal + '%',
                            middle: props.performanceLastMonth + '%',
                            right: props.performanceCurrentMonth + '%'
                        }}
                        graphText={{left: 'Since Inception', middle: 'Previous Month', right: 'Current Month'}}
                        data={props.userRelevantMonths}
                        xAxis={'month'}
                        dataKey={{line: 'accumulated', bar: 'performance'}}
                        lastUpdated={props.lastUpdated}
                    />
                    <Transactions 
                            transactions={props.transactions}
                    />
                </div>

                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <CurrencyPortfolio 	
                            balance={props.balance}
                        equity={props.equity}
                        dividends={props.dividends}  
                        performanceTotal={props.performanceTotal}
                        />

                    <Profile
                        id={props.id}
                        username={props.username}
                        email={props.email}
                        phone={props.phone}
                        company={props.company}
                        address={props.address}
                        country={props.country}
                    />
                </div>
            </div>
            <Footer />
        </div>
    )  
}
    
export default Dashboard;
