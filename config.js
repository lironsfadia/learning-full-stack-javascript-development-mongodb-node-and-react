const env = process.env;

export const nodeEnv = env.nodeEnv || 'development';
export const logStars = function(message){
    console.info('****************');
    console.info(message);
    console.info('****************');
};
export default {
    port: env.port || 8080
};