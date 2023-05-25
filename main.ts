microbitApp.compassButtonDown(CompassButtonOption.W, function () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    microbitApp.getSliderX(),
    robotbit.Motors.M1B,
    microbitApp.getSliderX() * -1
    )
    robotbit.MotorRunDual(
    robotbit.Motors.M2B,
    microbitApp.getSliderX() * -1,
    robotbit.Motors.M2A,
    microbitApp.getSliderX()
    )
})
microbitApp.compassButtonDown(CompassButtonOption.N, function () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    microbitApp.getSliderX(),
    robotbit.Motors.M1B,
    microbitApp.getSliderX()
    )
    robotbit.MotorRunDual(
    robotbit.Motors.M2B,
    microbitApp.getSliderX(),
    robotbit.Motors.M2A,
    microbitApp.getSliderX()
    )
})
microbitApp.onButtonReleased(function () {
    robotbit.MotorStopAll()
})
microbitApp.compassButtonDown(CompassButtonOption.NE, function () {
    robotbit.MotorRunDual(
    robotbit.Motors.M2B,
    microbitApp.getSliderX(),
    robotbit.Motors.M1B,
    microbitApp.getSliderX()
    )
})
microbitApp.compassButtonDown(CompassButtonOption.SE, function () {
    robotbit.MotorRunDual(
    robotbit.Motors.M2B,
    microbitApp.getSliderX() * -1,
    robotbit.Motors.M1B,
    microbitApp.getSliderX() * -1
    )
})
microbitApp.compassButtonDown(CompassButtonOption.NW, function () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    microbitApp.getSliderX(),
    robotbit.Motors.M2A,
    microbitApp.getSliderX()
    )
})
microbitApp.compassButtonDown(CompassButtonOption.S, function () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    microbitApp.getSliderX() * -1,
    robotbit.Motors.M1B,
    microbitApp.getSliderX() * -1
    )
    robotbit.MotorRunDual(
    robotbit.Motors.M2B,
    microbitApp.getSliderX() * -1,
    robotbit.Motors.M2A,
    microbitApp.getSliderX() * -1
    )
})
microbitApp.compassButtonDown(CompassButtonOption.E, function () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    microbitApp.getSliderX() * -1,
    robotbit.Motors.M1B,
    microbitApp.getSliderX()
    )
    robotbit.MotorRunDual(
    robotbit.Motors.M2B,
    microbitApp.getSliderX(),
    robotbit.Motors.M2A,
    microbitApp.getSliderX() * -1
    )
})
microbitApp.compassButtonDown(CompassButtonOption.SW, function () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    microbitApp.getSliderX() * -1,
    robotbit.Motors.M2A,
    microbitApp.getSliderX() * -1
    )
})
microbitApp.setLightState(LightOption.Light1, LightState.On)
microbitApp.setLightState(LightOption.Light2, LightState.On)
basic.forever(function () {
	
})
