chrome.action.onClicked.addListener((tab) => {
    // Log Tag Info
    console.log(tab)

    // Get Tab Info
    // You'll need the tabs permission to get name, icon, url
    // If not it just return generic tab information.
    // const tabIcon = tab.favIconUrl;
    // const url = tab.url
    const title = tab.title;

    const anyId = new Date().getTime().toString();
    const notificationoptions = {
        title: title,
        iconUrl: "logo.png",
        message: "This is your active tab",
        type: "basic"
    }
    // show notification
    chrome.notifications.create(anyId, notificationoptions)

});