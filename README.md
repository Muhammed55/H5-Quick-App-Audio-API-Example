# H5-Quick-App-Audio-API-Example
This is an example showcasing how to use postmessage, onmessage and Quick App's Audio API to play uninterrupted audio in your H5 Quick App. It contains a very simple HTML page and a simple Quick App project.

This project has a corresponding article that you can find in the [Huawei Developers Forum](https://forums.developer.huawei.com/forumPortal/en/topic/0204405902380710148). Please read it if you want to have more background information.

Most changes for the Quick App are made in the [hello.ux](https://github.com/Muhammed55/H5-Quick-App-Audio-API-Example/blob/main/src/Hello/hello.ux) file. Some minor changes are made in the Quick App's [manifest.json](https://github.com/Muhammed55/H5-Quick-App-Audio-API-Example/blob/main/src/manifest.json) file.
Then there is the [index.html](https://github.com/Muhammed55/H5-Quick-App-Audio-API-Example/blob/main/index.html) page that is being displayed in the Quick App's Web component.

If you want to test out this Quick App, host the index.html file somewhere (I did it locally), import the Quick App Project into the [Huawei QuickApp IDE](https://developer.huawei.com/consumer/en/doc/development/quickApp-Guides/quickapp-installtool) and change the <b>loadUrl</b> value in the hello.ux file to whatever the URL is of the index.html page.

More information about Quick Apps can be found in [Huawei's documentation](https://developer.huawei.com/consumer/en/quickApp/).
