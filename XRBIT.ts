/**
 * 使用此文件来定义自定义函数和图形块。
 * 想了解更详细的信息，请前往 https://makecode.microbit.org/blocks/custom
 */

/*****************************************************************************************************************************************
 *  四足狗类 ***************************************************************************************************************************** 
 ****************************************************************************************************************************************/

//% weight=5 color=#B53F32 icon = "\uf1b6"
namespace XRbit_DOG {
    const movements_json = {
        ACTION_STOP: "FF37000000000000000000000000FF",
        ACTION_FORWARD: "FF37010000000000000000000000FF",
        ACTION_BACKWARD: "FF37020000000000000000000000FF",
        ACTION_TURN_LEFT: "FF37030000000000000000000000FF",
        ACTION_TURN_RIGHT: "FF37040000000000000000000000FF",
        ACTION_SHIFT_LEFT: "FF37050000000000000000000000FF",
        ACTION_SHIFT_RIGHT: "FF37060000000000000000000000FF",
        ACTION_LOOK_DOWN: "FF37080000000000000000000000FF",
        ACTION_LOOK_UP: "FF37070000000000000000000000FF",
        ACTION_TILT_LEFT: "FF37090000000000000000000000FF",
        ACTION_TILT_RIGHT: "FF370a0000000000000000000000FF",
        ACTION_STEPPING: "FF370b0000000000000000000000FF",

        ACTION_HELLO: "FF42010000000000000000000000FF",
        ACTION_BYE: "FF42020000000000000000000000FF",
        ACTION_DEFENCE: "FF42030000000000000000000000FF",
        ACTION_CAT: "FF42040000000000000000000000FF",
        ACTION_SURRENDER: "FF42050000000000000000000000FF",
        ACTION_PROVOCATION: "FF42060000000000000000000000FF",
        ACTION_STRETCH: "FF42070000000000000000000000FF",
        ACTION_PISSING: "FF42080000000000000000000000FF",
        ACTION_JUMP: "FF42090000000000000000000000FF",
        ACTION_PLAY_DEAD: "FF420a0000000000000000000000FF",

        // ACTION_TEMPLATE: "FF420b0000000000000000000000FF",
        GAIT_PACE: "FF45000000000000000000000000FF",
        GAIT_WALK: "FF45010000000000000000000000FF",
        GAIT_TROT: "FF45020000000000000000000000FF",
        GAIT_HOP: "FF45030000000000000000000000FF",
        GAIT_CLIMB: "FF45040000000000000000000000FF"
    }

    const LEG_INDEX = {
        LEFT_FRONT_LEG: 0,
        RIGHT_FRONT_LEG: 3,
        LEFT_REAR_LEG: 6,
        RIGHT_REAR_LEG: 9,
    }

    const JOINT_INDEX = {
        BODY_JOINT: 1,
        MIDDLE_JOINT: 2,
        FOOT_JOINT: 3,
    }



    export enum enDogmovement {
        //% blockId="ACTION_STOP" block="ACTION_STOP"
        ACTION_STOP,
        //% blockId="ACTION_FORWARD" block="ACTION_FORWARD"
        ACTION_FORWARD,
        //% blockId="ACTION_BACKWARD" block="ACTION_BACKWARD"
        ACTION_BACKWARD,
        //% blockId="ACTION_TURN_LEFT" block="ACTION_TURN_LEFT"
        ACTION_TURN_LEFT,
        //% blockId="ACTION_TURN_RIGHT" block="ACTION_TURN_RIGHT"
        ACTION_TURN_RIGHT,
        //% blockId="ACTION_SHIFT_LEFT" block="ACTION_SHIFT_LEFT"
        ACTION_SHIFT_LEFT,
        //% blockId="ACTION_SHIFT_RIGHT" block="ACTION_SHIFT_RIGHT"
        ACTION_SHIFT_RIGHT,
        //% blockId="ACTION_LOOK_DOWN" block="ACTION_LOOK_DOWN"
        ACTION_LOOK_DOWN,
        //% blockId="ACTION_LOOK_UP" block="ACTION_LOOK_UP"
        ACTION_LOOK_UP,
        //% blockId="ACTION_TILT_LEFT" block="ACTION_TILT_LEFT"
        ACTION_TILT_LEFT,
        //% blockId="ACTION_TILT_RIGHT" block="ACTION_TILT_RIGHT"
        ACTION_TILT_RIGHT,
        //% blockId="ACTION_STEPPING" block="ACTION_STEPPING"
        ACTION_STEPPING
    }

    export enum enDogactions {
        //% blockId="ACTION_HELLO" block="ACTION_HELLO"
        ACTION_HELLO,
        //% blockId="ACTION_BYE" block="ACTION_BYE"
        ACTION_BYE,
        //% blockId="ACTION_DEFENCE" block="ACTION_DEFENCE"
        ACTION_DEFENCE,
        //% blockId="ACTION_CAT" block="ACTION_CAT"
        ACTION_CAT,
        //% blockId="ACTION_SURRENDER" block="ACTION_SURRENDER"
        ACTION_SURRENDER,
        //% blockId="ACTION_PROVOCATION" block="ACTION_PROVOCATION"
        ACTION_PROVOCATION,
        //% blockId="ACTION_STRETCH" block="ACTION_STRETCH"
        ACTION_STRETCH,
        //% blockId="ACTION_PISSING" block="ACTION_PISSING"
        ACTION_PISSING,
        //% blockId="ACTION_JUMP" block="ACTION_JUMP"
        ACTION_JUMP,
        //% blockId="ACTION_PLAY_DEAD" block="ACTION_PLAY_DEAD"
        ACTION_PLAY_DEAD
    }

    export enum enDogWalkGait {
        //% blockId="GAIT_PACE" block="GAIT_PACE"
        GAIT_PACE,
        //% blockId="GAIT_WALK" block="GAIT_WALK"
        GAIT_WALK,
        //% blockId="GAIT_TROT" block="GAIT_TROT"
        GAIT_TROT,
        //% blockId="GAIT_HOP" block="GAIT_HOP"
        GAIT_HOP,
        //% blockId="GAIT_CLIMB" block="GAIT_CLIMB"
        GAIT_CLIMB
    }

    export enum enDogLed {
        //% blockId="ACTION_TURN_ON" block="ACTION_TURN_ON"
        ACTION_TURN_ON,
        //% blockId="ACTION_TURN_OFF" block="ACTION_TURN_OFF"
        ACTION_TURN_OFF
    }

    export enum leg_options {
        //% blockId="LEFT_FRONT_LEG" block="LEFT_FRONT_LEG"
        LEFT_FRONT_LEG,
        //% blockId="RIGHT_FRONT_LEG" block="RIGHT_FRONT_LEG"
        RIGHT_FRONT_LEG,
        //% blockId="LEFT_REAR_LEG" block="LEFT_REAR_LEG"
        LEFT_REAR_LEG,
        //% blockId="RIGHT_REAR_LEG" block="RIGHT_REAR_LEG"
        RIGHT_REAR_LEG
    }

    export enum joint_options {
        //% blockId="BODY_JOINT" block="BODY_JOINT"
        BODY_JOINT,
        //% blockId="MIDDLE_JOINT" block="MIDDLE_JOINT"
        MIDDLE_JOINT,
        //% blockId="FOOT_JOINT" block="FOOT_JOINT"
        FOOT_JOINT
    }



    //% blockId=UartInit block="UartInit"
    //% weight=94
    //% blockGap=10
    //% color="#B53F32"
    export function UartInit(): void {
        serial.redirect(
            SerialPin.P13,
            SerialPin.P14,
            BaudRate.BaudRate115200
        )
    }

    //% blockId=corgi_movement block="corgi_movement|movement %movement"
    //% weight=94
    //% blockGap=10
    //% color="#B53F32"
    export function corgi_movement(action: enDogmovement): void {
        switch (action) {
            case enDogmovement.ACTION_STOP:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_STOP));
                break;
            case enDogmovement.ACTION_FORWARD:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_FORWARD));
                break;
            case enDogmovement.ACTION_BACKWARD:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_BACKWARD));
                break;
            case enDogmovement.ACTION_TURN_LEFT:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_TURN_LEFT));
                break;
            case enDogmovement.ACTION_TURN_RIGHT:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_TURN_RIGHT));
                break;
            case enDogmovement.ACTION_SHIFT_LEFT:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_SHIFT_LEFT));
                break;
            case enDogmovement.ACTION_SHIFT_RIGHT:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_SHIFT_RIGHT));
                break;
            case enDogmovement.ACTION_LOOK_DOWN:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_LOOK_DOWN));
                break;
            case enDogmovement.ACTION_LOOK_UP:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_LOOK_UP));
                break;
            case enDogmovement.ACTION_TILT_LEFT:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_TILT_LEFT));
                break;
            case enDogmovement.ACTION_TILT_RIGHT:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_TILT_RIGHT));
                break;
            case enDogmovement.ACTION_STEPPING:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_STEPPING));
                break;
        }
    }

    //% blockId=corgi_movement_ms block="corgi_movement_ms|movement %movement|%time"
    //% weight=94
    //% blockGap=10
    //% color="#B53F32"
    export function corgi_movement_ms(action: enDogmovement, time: number): void {
        switch (action) {
            case enDogmovement.ACTION_STOP:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_STOP));
                basic.pause(time);
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_STOP));
                break;
            case enDogmovement.ACTION_FORWARD:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_FORWARD));
                basic.pause(time);
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_STOP));
                break;
            case enDogmovement.ACTION_BACKWARD:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_BACKWARD));
                basic.pause(time);
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_STOP));
                break;
            case enDogmovement.ACTION_TURN_LEFT:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_TURN_LEFT));
                basic.pause(time);
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_STOP));
                break;
            case enDogmovement.ACTION_TURN_RIGHT:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_TURN_RIGHT));
                basic.pause(time);
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_STOP));
                break;
            case enDogmovement.ACTION_SHIFT_LEFT:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_SHIFT_LEFT));
                basic.pause(time);
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_STOP));
                break;
            case enDogmovement.ACTION_SHIFT_RIGHT:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_SHIFT_RIGHT));
                basic.pause(time);
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_STOP));
                break;
            case enDogmovement.ACTION_LOOK_DOWN:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_LOOK_DOWN));
                basic.pause(time);
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_STOP));
                break;
            case enDogmovement.ACTION_LOOK_UP:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_LOOK_UP));
                basic.pause(time);
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_STOP));
                break;
            case enDogmovement.ACTION_TILT_LEFT:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_TILT_LEFT));
                basic.pause(time);
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_STOP));
                break;
            case enDogmovement.ACTION_TILT_RIGHT:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_TILT_RIGHT));
                basic.pause(time);
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_STOP));
                break;
            case enDogmovement.ACTION_STEPPING:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_STEPPING));
                basic.pause(time);
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_STOP));
                break;
        }
    }

    //% blockId=corgi_actions block="corgi_actions|action %action"
    //% weight=94
    //% blockGap=10
    //% color="#B53F32"
    export function corgi_actions(action: enDogactions): void {
        switch (action) {
            case enDogactions.ACTION_HELLO:
                // const d = movements_json.ACTION_HELLO;
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_HELLO));
                break;
            case enDogactions.ACTION_BYE:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_BYE));
                break;
            case enDogactions.ACTION_DEFENCE:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_DEFENCE));
                break;
            case enDogactions.ACTION_CAT:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_CAT));
                break;
            case enDogactions.ACTION_SURRENDER:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_SURRENDER));
                break;
            case enDogactions.ACTION_PROVOCATION:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_PROVOCATION));
                break;
            case enDogactions.ACTION_STRETCH:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_STRETCH));
                break;
            case enDogactions.ACTION_PISSING:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_PISSING));
                break;
            case enDogactions.ACTION_JUMP:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_JUMP));
                break;
            case enDogactions.ACTION_PLAY_DEAD:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_PLAY_DEAD));
                break;
        }
    }

    //% blockId=corgi_walk_gait block="corgi_walk_gait|action %action"
    //% weight=94
    //% blockGap=10
    //% color="#B53F32"
    export function corgi_walk_gait(action: enDogWalkGait): void {
        switch (action) {
            case enDogWalkGait.GAIT_PACE:
                serial.writeBuffer(Buffer.fromHex(movements_json.GAIT_PACE));
                break;
            case enDogWalkGait.GAIT_WALK:
                serial.writeBuffer(Buffer.fromHex(movements_json.GAIT_WALK));
                break;
            case enDogWalkGait.GAIT_TROT:
                serial.writeBuffer(Buffer.fromHex(movements_json.GAIT_TROT));
                break;
            case enDogWalkGait.GAIT_HOP:
                serial.writeBuffer(Buffer.fromHex(movements_json.GAIT_HOP));
                break;
            case enDogWalkGait.GAIT_CLIMB:
                serial.writeBuffer(Buffer.fromHex(movements_json.GAIT_CLIMB));
                break;
        }
    }

    //% blockId=corgi_led_control block="corgi_led_control|action %action"
    //% weight=94
    //% blockGap=10
    //% color="#B53F32"
    export function corgi_led_control(action: enDogLed): void {
        switch (action) {
            case enDogLed.ACTION_TURN_OFF:
                pins.digitalWritePin(DigitalPin.P12, 0);
                break;
            case enDogLed.ACTION_TURN_ON:
                pins.digitalWritePin(DigitalPin.P12, 1);
                break;
        }
    }

    //% blockId=corgi_forward_kinematics block="corgi_forward_kinematics|leg %leg|joint %joint |angle %angle"
    //% weight=94
    //% blockGap=10
    //% color="#B53F32"
    //% angle.min=0 angle.max=180
    export function corgi_forward_kinematics(leg: leg_options, joint: joint_options, angle: number): void {
        const ACTION_TEMPLATE = [0xFF, 0x42, 0x0a, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF];
        let leg_num = 0;
        let joint_num = 0;
        switch (leg) {
            case leg_options.LEFT_FRONT_LEG:
                leg_num = LEG_INDEX.LEFT_FRONT_LEG;
                break;
            case leg_options.RIGHT_FRONT_LEG:
                leg_num = LEG_INDEX.RIGHT_FRONT_LEG;
                break;
            case leg_options.LEFT_REAR_LEG:
                leg_num = LEG_INDEX.LEFT_REAR_LEG;
                break;
            case leg_options.RIGHT_REAR_LEG:
                leg_num = LEG_INDEX.RIGHT_REAR_LEG;
                break;
        }
        switch (joint) {
            case joint_options.BODY_JOINT:
                joint_num = JOINT_INDEX.BODY_JOINT;
                break;
            case joint_options.MIDDLE_JOINT:
                joint_num = JOINT_INDEX.MIDDLE_JOINT;
                break;
            case joint_options.FOOT_JOINT:
                joint_num = JOINT_INDEX.FOOT_JOINT;
                break;
        }

        // ACTION_TEMPLATE[1] = 0x41;
        // ACTION_TEMPLATE[2] = (leg_num ) + (joint_num);
        // ACTION_TEMPLATE[3] = angle;


        // serial.writeBuffer(Buffer.fromArray(ACTION_TEMPLATE))
    }
}