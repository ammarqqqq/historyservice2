module.exports = function(){
    switch(process.env.NODE_ENV){
        case 'test':
            return {
              'secret': '04050405',
              'database': 'mongodb://localhost:27014/historytable',
              'logsDirectory': 'logs',
              'serviceName': 'historyservice'
            };
        default:
            return {
              'secret': '04050405',
              'database': 'mongodb://microservices_historymongo:27014/historytable',
              'logsDirectory': 'logs',
              'serviceName': 'historyservice'
            };
    }
};
