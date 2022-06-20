import { Progress } from 'antd';

const CircleProgress = () => {

  return <Progress
    type="circle"
    width={75}
    trailColor="rgb(0 0 0 / 0%)"
    strokeColor={{
      '0%': 'PURPLE',
      '100%': '#17AB9C',
    }}
    strokeWidth="3"
    percent={50}
  />;
};

export default CircleProgress;