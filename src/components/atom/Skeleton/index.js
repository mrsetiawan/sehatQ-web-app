import { React, Skeleton } from '../../../libraries'

const LoadingScreen = ({ type, circle, count, duration, width, height }) => <Skeleton count={count} duration={duration} />

export default LoadingScreen
