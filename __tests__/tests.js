import renderer from 'react-test-renderer';
import MainPage from '../client/components/Pages/MainPage'
import MapPage from '../client/components/Pages/MapPage'
import { GoogleMap } from '@react-google-maps/api';

describe('App', () => {
  it('renders correctly', () => {
    const pageRender = renderer.create(<MainPage />).toJSON();
    expect(pageRender).toMatchSnapshot()
  })
})

describe('MainPage', () => {
  it('renders correctly', () => {
    const partySpots = [{ lat: 40.730610, lng: -73.935242 }]
    const mapRender = renderer.create(<MapPage partySpots={partySpots} />).toJSON();
    expect(mapRender).toMatchSnapshot()
  })
})

describe('MapPage', (props) => {
  it('renders correctly', () => {
    const googleRender = renderer.create(<GoogleMap />).toJSON();
    expect(googleRender).toMatchSnapshot()
  })
})

