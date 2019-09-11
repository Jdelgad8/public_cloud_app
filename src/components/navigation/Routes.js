import { StackNavigator } from 'react-navigation';
import AWSDetail from '../containers/AWSDetail';
import AzureDetail from '../containers/AzureDetail';
import DropboxDetail from '../containers/DropboxDetail';
import GoogleDriveDetail from '../containers/GoogleDriveDetail';
import ICloudDetail from '../containers/ICloudDetail';

export default Routes = StackNavigator({
  DropboxDetail: { screen: DropboxDetail },
  GoogleDriveDetail: { screen: GoogleDriveDetail },
  AzureDetail: { screen: AzureDetail },
  ICloudDetail: { screen: ICloudDetail },
  AWSDetail: { screen: AWSDetail },
});