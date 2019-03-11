var expect = require('chai').expect;

var wd = require('wd'),
    driver = wd.promiseChainRemote({
        host: 'localhost',
        port: 4723
    });


const desiredCaps = {
  platformName: 'Android',
  platformVersion: '8.0',
  deviceName: 'c4e3f3cd',
  app: __dirname + '/../app/sampleApp.apk'
}

var assert = require('assert');
describe('AWSDeviceFarmReferenceAppTest', function () {


    before(function () {
        this.timeout(300 * 1000);
        
        

        return driver.init(desiredCaps);
    });


    after(function () {
        console.log("quitting");
    });


    it('test_app_is_loaded', async function () {
        const element = await driver.elementById("com.amazonaws.devicefarm.android.referenceapp:id/homepage_headline");
        expect(element).to.exist;
    });


    it('test_click_on_home_6_times', async function () {
        this.timeout(300 * 1000);
        var i = 5;
        while (i > 0 ) {
            const element = await driver.elementByAccessibilityId("ReferenceApp");
            expect(element).to.exist;
            element.click();

            await new Promise(res => setTimeout(res, 1000));

            const element2 = await driver.elementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.support.v4.widget.DrawerLayout/android.widget.RelativeLayout/android.support.v7.widget.RecyclerView/android.widget.FrameLayout[1]");
            expect(element2).to.exist;
            element2.click();
            i--;
            await new Promise(res => setTimeout(res, 1000));
        }
    });
});
