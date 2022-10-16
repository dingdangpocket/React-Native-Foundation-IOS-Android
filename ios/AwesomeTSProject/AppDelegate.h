
#import <React/RCTBridgeDelegate.h>
#import <UIKit/UIKit.h>
#import "WXApi.h"

@interface AppDelegate : UIResponder <UIApplicationDelegate, RCTBridgeDelegate, WXApiDelegate>

@property(nonatomic, strong) UIWindow *window;

@end

// #import <React/RCTBridgeDelegate.h>
// #import <UIKit/UIKit.h>
// #import <WXApi.h>

// @interface AppDelegate : UIResponder <UIApplicationDelegate, RCTBridgeDelegate>

// @property(nonatomic, strong) UIWindow *window;

// @end
// #import <React/RCTBridgeDelegate.h>
// #import <UIKit/UIKit.h>

// @interface AppDelegate : UIResponder <UIApplicationDelegate, RCTBridgeDelegate>

// @property (nonatomic, strong) UIWindow *window;

// @end
