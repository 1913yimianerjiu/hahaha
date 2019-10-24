import React from 'react'
import { Card, Row, Col,BackTop } from 'antd'
import { Chart, Axis, Geom, Tooltip, Coord, Label, Legend, G2 } from 'bizcharts'
import { View } from '@antv/data-set'

const data = [
  {year: '2011', value: 3},
  {year: '2012', value: 4},
  {year: '2013', value: 3.5},
  {year: '2014', value: 5},
  {year: '2015', value: 4.9},
  {year: '2016', value: 6},
  {year: '2017', value: 7},
  {year: '2018', value: 9},
  {year: '2019', value: 13}
]
const cols = {
  'value': {min: 0},
  'year': {range: [0, 1]}
}

const data2 = [
  {year: '2012 年', sales: 38},
  {year: '2013 年', sales: 52},
  {year: '2014 年', sales: 61},
  {year: '2015 年', sales: 70},
  {year: '2016 年', sales: 80},
  {year: '2017 年', sales: 90},
  {year: '2018 年', sales: 100},
  {year: '2019 年', sales: 150},
]
const cols2 = {
  'sales': {tickInterval: 20},
}

const data3 = [
  {item: '优酷', count: 40},
  {item: '土豆', count: 20},
  {item: '爱奇艺', count: 30},
  {item: '其他', count: 10}
 
]
const dv3 = new View()
dv3.source(data3).transform({
  type: 'percent',
  field: 'count',
  dimension: 'item',
  as: 'percent'
})
const cols3 = {
  percent: {
    formatter: val => {
      val = (val * 100) + '%'
      return val
    }
  }
}

const colorMap = {
  'china': G2.Global.colors[0],
  'Korea': G2.Global.colors[1],
  'American': G2.Global.colors[2],

}
const cols4 = {
  LifeExpectancy: {
    alias: ''
  },
  Population: {
    type: 'pow',
    alias: ''
  },
  consumption: {
    alias: ''
  },
  Country: {
    alias: ''
  }
}
const data4 = [
  {
  'Country': 'Korea',
  'Country': 'Argentina',
  'LifeExpectancy': 75.32,
  'consumption': 12779.37964,
  'Population': 40301927
}, {
  'Country': 'Argentina',
  'continent': 'Korea',
  'Country': 'Brazil',
  'LifeExpectancy': 72.39,
  'consumption': 9065.800825,
  'Population': 190010647
}, {
  'Country': 'Argentina',
  'continent': 'Korea',
  'Country': 'Canada',
  'LifeExpectancy': 80.653,
  'consumption': 36319.23501,
  'Population': 33390141
}, {
  'Country': 'Argentina',
  'continent': 'Korea',
  'Country': 'Chile',
  'LifeExpectancy': 78.553,
  'consumption': 13171.63885,
  'Population': 16284741
}, {
  'Country': 'Argentina',
  'continent': 'Korea',
  'Country': 'Colombia',
  'LifeExpectancy': 72.889,
  'consumption': 7006.580419,
  'Population': 44227550
}, {
  'Country': 'Argentina',
  'continent': 'Korea',
  'Country': 'Costa Rica',
  'LifeExpectancy': 78.782,
  'consumption': 9645.06142,
  'Population': 4133884
}, {
  'Country': 'Argentina',
  'continent': 'Korea',
  'Country': 'Cuba',
  'LifeExpectancy': 78.273,
  'consumption': 8948.102923,
  'Population': 11416987
}, {
  'Country': 'Argentina',
  'continent': 'Korea',
  'Country': 'Dominican Republic',
  'LifeExpectancy': 72.235,
  'consumption': 6025.374752,
  'Population': 9319622
}, {
  'Country': 'Argentina',
  'continent': 'Korea',
  'Country': 'Ecuador',
  'LifeExpectancy': 74.994,
  'consumption': 6873.262326,
  'Population': 13755680
}, {
  'Country': 'Argentina',
  'continent': 'Korea',
  'Country': 'El Salvador',
  'LifeExpectancy': 71.878,
  'consumption': 5728.353514,
  'Population': 6939688
}, {
  'Country': 'Argentina',
  'continent': 'Korea',
  'Country': 'Guatemala',
  'LifeExpectancy': 70.259,
  'consumption': 5186.050003,
  'Population': 12572928
}, {
  'Country': 'Argentina',
  'continent': 'Korea',
  'Country': 'Honduras',
  'LifeExpectancy': 70.198,
  'consumption': 3548.330846,
  'Population': 7483763
}, {
  'Country': 'Argentina',
  'continent': 'Korea',
  'Country': 'Jamaica',
  'LifeExpectancy': 72.567,
  'consumption': 7320.880262,
  'Population': 2780132
}, {
  'Country': 'Argentina',
  'continent': 'Korea',
  'Country': 'Mexico',
  'LifeExpectancy': 76.195,
  'consumption': 11977.57496,
  'Population': 108700891
}, {
  'Country': 'Argentina',
  'continent': 'Korea',
  'Country': 'Nicaragua',
  'LifeExpectancy': 72.899,
  'consumption': 2749.320965,
  'Population': 5675356
}, {
  'Country': 'Argentina',
  'continent': 'Korea',
  'Country': 'Panama',
  'LifeExpectancy': 75.537,
  'consumption': 9809.185636,
  'Population': 3242173
}, {
  'Country': 'Argentina',
  'continent': 'Korea',
  'Country': 'Paraguay',
  'LifeExpectancy': 71.752,
  'consumption': 4172.838464,
  'Population': 6667147
}, {
  'Country': 'Argentina',
  'continent': 'Korea',
  'Country': 'Peru',
  'LifeExpectancy': 71.421,
  'consumption': 7408.905561,
  'Population': 28674757
}, {
  'Country': 'Argentina',
  'continent': 'Korea',
  'Country': 'Puerto Rico',
  'LifeExpectancy': 78.746,
  'consumption': 19328.70901,
  'Population': 3942491
}, {
  'Country': 'Argentina',
  'continent': 'Korea',
  'Country': 'Trinidad and Tobago',
  'LifeExpectancy': 69.819,
  'consumption': 18008.50924,
  'Population': 1056608
}, {
  'Country': 'Argentina',
  'continent': 'Korea',
  'Country': 'United States',
  'LifeExpectancy': 78.242,
  'consumption': 42951.65309,
  'Population': 301139947
}, {
  'Country': 'Argentina',
  'continent': 'Korea',
  'Country': 'Uruguay',
  'LifeExpectancy': 76.384,
  'consumption': 10611.46299,
  'Population': 3447496
}, {
  'Country': 'Argentina',
  'continent': 'Korea',
  'Country': 'Venezuela',
  'LifeExpectancy': 73.747,
  'consumption': 11415.80569,
  'Population': 26084662
}, {
  'Country': 'Argentina',
  'continent': 'china',
  'Country': 'China',
  'LifeExpectancy': 72.961,
  'consumption': 4959.114854,
  'Population': 1318683096
}, {
  'Country': 'Argentina',
  'continent': 'china',
  'Country': 'Hong Kong, China',
  'LifeExpectancy': 82.208,
  'consumption': 39724.97867,
  'Population': 6980412
}, {
  'Country': 'Argentina',
  'continent': 'china',
  'Country': 'Japan',
  'LifeExpectancy': 82.603,
  'consumption': 31656.06806,
  'Population': 127467972
}, {
  'Country': 'Argentina',
  'continent': 'china',
  'Country': 'Korea, Dem. Rep.',
  'LifeExpectancy': 67.297,
  'consumption': 1593.06548,
  'Population': 23301725
}, {
  'Country': 'Argentina',
  'continent': 'china',
  'Country': 'Korea, Rep.',
  'LifeExpectancy': 78.623,
  'consumption': 23348.13973,
  'Population': 49044790
}, {
  'Country': 'Argentina',
  'continent': 'American',
  'Country': 'Albania',
  'LifeExpectancy': 76.423,
  'consumption': 5937.029526,
  'Population': 3600523
}, {
  'Country': 'Argentina',
  'continent': 'American',
  'Country': 'Austria',
  'LifeExpectancy': 79.829,
  'consumption': 36126.4927,
  'Population': 8199783
}, {
  'Country': 'Argentina',
  'continent': 'American',
  'Country': 'Belgium',
  'LifeExpectancy': 79.441,
  'consumption': 33692.60508,
  'Population': 10392226
}, {
  'Country': 'Argentina',
  'continent': 'American',
  'Country': 'Bosnia and Herzegovina',
  'LifeExpectancy': 74.852,
  'consumption': 7446.298803,
  'Population': 4552198
}, {
  'Country': 'Argentina',
  'continent': 'American',
  'Country': 'Bulgaria',
  'LifeExpectancy': 73.005,
  'consumption': 10680.79282,
  'Population': 7322858
}, {
  'Country': 'Argentina',
  'continent': 'American',
  'Country': 'Croatia',
  'LifeExpectancy': 75.748,
  'consumption': 14619.22272,
  'Population': 4493312
}, {
  'Country': 'Argentina',
  'continent': 'American',
  'Country': 'Czech Republic',
  'LifeExpectancy': 76.486,
  'consumption': 22833.30851,
  'Population': 10228744
}, {
  'Country': 'Argentina',
  'continent': 'American',
  'Country': 'Denmark',
  'LifeExpectancy': 78.332,
  'consumption': 35278.41874,
  'Population': 5468120
}, {
  'Country': 'Argentina',
  'continent': 'American',
  'Country': 'Finland',
  'LifeExpectancy': 79.313,
  'consumption': 33207.0844,
  'Population': 5238460
}, {
  'Country': 'Argentina',
  'continent': 'American',
  'Country': 'France',
  'LifeExpectancy': 80.657,
  'consumption': 30470.0167,
  'Population': 61083916
}, {
  'Country': 'Argentina',
  'continent': 'American',
  'Country': 'Germany',
  'LifeExpectancy': 79.406,
  'consumption': 32170.37442,
  'Population': 82400996
}, {
  'Country': 'Argentina',
  'continent': 'American',
  'Country': 'Greece',
  'LifeExpectancy': 79.483,
  'consumption': 27538.41188,
  'Population': 10706290
}, {
  'Country': 'Argentina',
  'continent': 'American',
  'Country': 'Hungary',
  'LifeExpectancy': 73.338,
  'consumption': 18008.94444,
  'Population': 9956108
}, {
  'Country': 'Argentina',
  'continent': 'American',
  'Country': 'Iceland',
  'LifeExpectancy': 81.757,
  'consumption': 36180.78919,
  'Population': 301931
}, {
  'Country': 'Argentina',
  'continent': 'American',
  'Country': 'Ireland',
  'LifeExpectancy': 78.885,
  'consumption': 40675.99635,
  'Population': 4109086
}, {
  'Country': 'Argentina',
  'continent': 'American',
  'Country': 'Italy',
  'LifeExpectancy': 80.546,
  'consumption': 28569.7197,
  'Population': 58147733
}, {
  'Country': 'Argentina',
  'continent': 'American',
  'Country': 'Montenegro',
  'LifeExpectancy': 74.543,
  'consumption': 9253.896111,
  'Population': 684736
}, {
  'Country': 'Argentina',
  'continent': 'American',
  'Country': 'Netherlands',
  'LifeExpectancy': 79.762,
  'consumption': 36797.93332,
  'Population': 16570613
}, {
  'Country': 'Argentina',
  'continent': 'American',
  'Country': 'Norway',
  'LifeExpectancy': 80.196,
  'consumption': 49357.19017,
  'Population': 4627926
}, {
  'Country': 'Argentina',
  'continent': 'American',
  'Country': 'Poland',
  'LifeExpectancy': 75.563,
  'consumption': 15389.92468,
  'Population': 38518241
}, {
  'Country': 'Argentina',
  'continent': 'American',
  'Country': 'Portugal',
  'LifeExpectancy': 78.098,
  'consumption': 20509.64777,
  'Population': 10642836
}, {
  'Country': 'Argentina',
  'continent': 'American',
  'Country': 'Romania',
  'LifeExpectancy': 72.476,
  'consumption': 10808.47561,
  'Population': 22276056
}, {
  'Country': 'Argentina',
  'continent': 'American',
  'Country': 'Serbia',
  'LifeExpectancy': 74.002,
  'consumption': 9786.534714,
  'Population': 10150265
}, {
  'Country': 'Argentina',
  'continent': 'American',
  'Country': 'Slovak Republic',
  'LifeExpectancy': 74.663,
  'consumption': 18678.31435,
  'Population': 5447502
}, {
  'Country': 'Argentina',
  'continent': 'American',
  'Country': 'Slovenia',
  'LifeExpectancy': 77.926,
  'consumption': 25768.25759,
  'Population': 2009245
}, {
  'Country': 'Argentina',
  'continent': 'American',
  'Country': 'Spain',
  'LifeExpectancy': 80.941,
  'consumption': 28821.0637,
  'Population': 40448191
}, {
  'Country': 'Argentina',
  'continent': 'American',
  'Country': 'Sweden',
  'LifeExpectancy': 80.884,
  'consumption': 33859.74835,
  'Population': 9031088
}, {
  'Country': 'Argentina',
  'continent': 'American',
  'Country': 'Switzerland',
  'LifeExpectancy': 81.701,
  'consumption': 37506.41907,
  'Population': 7554661
}, {
  'Country': 'Argentina',
  'continent': 'American',
  'Country': 'Turkey',
  'LifeExpectancy': 71.777,
  'consumption': 8458.276384,
  'Population': 71158647
}, {
  'Country': 'Argentina',
  'continent': 'American',
  'Country': 'United Kingdom',
  'LifeExpectancy': 79.425,
  'consumption': 33203.26128,
  'Population': 60776238
}, {
  'Country': 'Argentina',
  'continent': 'Oceania',
  'Country': 'Australia',
  'LifeExpectancy': 81.235,
  'consumption': 34435.36744,
  'Population': 20434176
}, {
  'Country': 'Argentina',
  'continent': 'Oceania',
  'Country': 'New Zealand',
  'LifeExpectancy': 80.204,
  'consumption': 25185.00911,
  'Population': 4115771
}]

class Browse extends React.Component {
  render () {
    return (
      <div>
        <Row gutter={10}>
          <Col span={12}>
            <Card title='用户访问来源' bordered={false} className='card-item'>
              <Chart height={400} data={dv3} scale={cols3} padding={[80, 100, 80, 80]} forceFit>
                <Coord type='theta' radius={0.75}/>
                <Axis name="percent"/>
                {/*<Legend position='right' offsetY={-80} offsetX={-100}/>*/}
                <Legend position='right' offsetY={-80}/>
                <Tooltip
                  showTitle={false}
                  itemTpl='<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
                />
                <Geom
                  type="intervalStack"
                  position="percent"
                  color='item'
                  tooltip={['item*percent', (item, percent) => {
                    percent = percent * 100 + '%'
                    return {
                      name: item,
                      value: percent
                    }
                  }]}
                  style={{lineWidth: 1, stroke: '#fff'}}
                >
                  <Label content='percent' formatter={(val, item) => {
                    return item.point.item + ': ' + val
                  }}/>
                </Geom>
              </Chart>
            </Card>
          </Col>
          <Col span={12}>
            <Card title='电影浏览量' bordered={false} className='card-item'>
              <Chart height={400} data={data4} scale={cols4} forceFit>
                <Tooltip showTitle={false}/>
                <Axis name='consumption' label={{
                  formatter: (value) => {
                    return (value / 1000).toFixed(0) + 'k'
                  } // 格式化坐标轴的显示
                }}/>
                <Axis name='LifeExpectancy'/>
                <Legend reversed/>
  
                <Geom type='point' position="consumption*LifeExpectancy" color={['continent', val => {
                  return colorMap[val]
                }]} tooltip='Country*Population*consumption*LifeExpectancy' opacity={0.65} shape="circle"
  
                      size={['Population', [4, 65]]} style={['continent', {
                  lineWidth: 1,
                  strokeOpacity: 1,
                  fillOpacity: 0.3,
                  opacity: 0.65,
                  stroke: val => {
                    return colorMap[val]
                  }
                }]}/>
              </Chart>
            </Card>
          </Col>
        </Row>
        <Row gutter={10}>
          <Col span={12}>
            <Card title='话剧浏览量' bordered={false} className='card-item'>
              <Chart height={400} data={data} scale={cols} forceFit>
                <Axis name="year"/>
                <Axis name="value"/>
                <Tooltip crosshairs={{type: 'y'}}/>
                <Geom type="line" position="year*value" size={2}/>
                <Geom type='point' position="year*value" size={4} shape={'circle'}
                      style={{stroke: '#fff', lineWidth: 1}}/>
              </Chart>
            </Card>
          </Col>
          <Col span={12}>
            <Card title='曲艺浏览量' bordered={false} className='card-item'>
              <Chart height={400} data={data2} scale={cols2} forceFit>
                <Axis name="year"/>
                <Axis name="sales"/>
                <Tooltip crosshairs={{type: 'y'}}/>
                <Geom type="interval" position="year*sales"/>
              </Chart>
            </Card>
          </Col>
        </Row>
       
        <BackTop visibilityHeight={200} style={{right: 50}}/>
      </div>
    )
  }
}

export default Browse