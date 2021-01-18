
import analytics from '@react-native-firebase/analytics';
import app from '@react-native-firebase/app';

class Analytics {
    static init() {
        if (app.utils().isRunningInTestLab) {
            analytics().setAnalyticsCollectionEnabled(false);
        } else {
            analytics().setAnalyticsCollectionEnabled(true);
        }
    }

    static onSignIn = async userObject => {
        const { id, email } = userObject;
        await Promise.all([
            analytics().setUserId(id),
            analytics().setUserProperty('email', email), // <--- DON'T DO THIS !!!
            this.logEvent("sign_in")
        ]);
    };

    static onSignUp = async userObject => {
        const { id, email } = userObject;
        await Promise.all([
            analytics().setUserId(id),
            analytics().setUserProperty('email', email),  // <--- DON'T DO THIS !!!
            analytics().setUserProperty('created_at', new Date()),
            this.logEvent("sign_up")
        ]);
    };

    static setCurrentScreen = async screenName => {
        analytics().logScreenView({
            screen_class: screenName,
            screen_name: screenName,
        });
        // await analytics().setCurrentScreen(screenName, screenName);
    };

    static logEvent = async (eventName, propertyObject = {}) => {
        await analytics().logEvent(eventName, propertyObject);
    }

    static onSignOut = async () => {
        await analytics().resetAnalyticsData();
    };
}

export default Analytics;