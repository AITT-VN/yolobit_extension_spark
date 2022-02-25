const ColorBlock = '#52D6F4';

// Blockly.Blocks['makerbit_move_motor'] = {
//   init: function() {
//     this.jsonInit(
//     {
//         "type": "block_move_motor",
//         "message0": "%3 quay động cơ trái tốc độ %1 động cơ phải %2 (-100 đến 100)",
//         "args0": [
//           {
//             "type": "input_value",
//             "name": "left_wheel_speed",
//             "check": "Number",
//         },
//         {
//             "type": "input_value",
//             "name": "right_wheel_speed",
//             "check": "Number",
//         },
//         {
//             "type": "field_image",
//             "src": "images/2479548.svg",
//             "width": 20,
//             "height": 20,
//             "alt": "*",
//             "flipRtl": false
//         }
//         ],
//         "inputsInline": true,
//         "previousStatement": null,
//         "nextStatement": null,
//         "colour": ColorBlock,
//         "tooltip": "",
//         "helpUrl": ""
//     }
//     );
//   }
//   };

// Blockly.Python["makerbit_move_motor"] = function (block) {
//   var motor = block.getFieldValue("motor");
//   var speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
//   // TODO: Assemble Python into code variable.
//   var code = "motor.speed(" + motor + ", " + speed + ")\n";
//   return code;
// };

Blockly.Blocks['makerbit_move_stop'] = {
  init: function() {
    this.jsonInit(
    {
        "type": "makerbit_move_stop",
        "message0": "%1 dừng di chuyển",
        "args0": [
            {
            "type": "field_image",
            "src": "images/827428.svg",
            "width": 20,
            "height": 20,
            "alt": "*",
            "flipRtl": false
            }],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": ColorBlock,
        "tooltip": "",
        "helpUrl": ""
        
    }
    );
  }
  };

Blockly.Python["makerbit_move_stop"] = function (block) {
  // TODO: Assemble Python into code variable.
  var code = "motor.move(0, 0)\n";
  return code;
};

Blockly.Blocks['makerbit_move_servo'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "makerbit_move_servo",
        "message0": "%3 servo %1 xoay góc %2 (0-180)",
        "args0": [
          
          {
            "type": "field_dropdown",
            "name": "servo",
            "options": [
              [
                "S1",
                "0"
              ],
              [
                "S2",
                "1"
              ],
              [
                "S3",
                "2"
              ],
              [
                "S4",
                "3"
              ],
              [
                "S5",
                "4"
              ],
              [
                "S6",
                "5"
              ],
              [
                "S7",
                "6"
              ],
              [
                "S8",
                "7"
              ]
            ]
          },
          {
            "type": "input_value",
            "name": "angle",
            "check": "Number"
          },
          {
            "type": "field_image",
            "src": "static/blocks/block_images/icon.webp",
            "width": 20,
            "height": 20,
            "alt": "*",
            "flipRtl": false
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": ColorBlock,
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python["makerbit_move_servo"] = function (block) {
  var servo = block.getFieldValue("servo");
  var angle = Blockly.Python.valueToCode(block, 'angle', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "servo.position(" + servo + ", " + angle + ")\n";
  return code;
};

Blockly.Python["makerbit_move_servo_rotate"] = function (block) {
  var servo = block.getFieldValue("servo");
  var change = Blockly.Python.valueToCode(block, 'change', Blockly.Python.ORDER_ATOMIC);
  var speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var limit = Blockly.Python.valueToCode(block, 'limit', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "servo.rotate(" + servo + ", " + change + ", " + speed + ", " + limit + ")\n";
  return code;
};

Blockly.Blocks['makerbit_move_servo_rotate'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "makerbit_move_servo_rotate",
        "message0": "%1 servo %2 xoay %3 độ tốc độ %4 (ms) giới hạn góc %5 độ",
        "args0": [
          {
            "type": "field_image",
            "src": "images/icon.webp",
            "width": 20,
            "height": 20,
            "alt": "*",
            "flipRtl": false
          },
          {
            "type": "field_dropdown",
            "name": "servo",
            "options": [
              [
                "S1",
                "0"
              ],
              [
                "S2",
                "1"
              ],
              [
                "S3",
                "2"
              ],
              [
                "S4",
                "3"
              ],
              [
                "S5",
                "4"
              ],
              [
                "S6",
                "5"
              ],
              [
                "S7",
                "6"
              ],
              [
                "S8",
                "7"
              ]
            ]
          },
          {
            "type": "input_value",
            "name": "change",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "speed",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "limit",
            "check": "Number"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": ColorBlock,
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};


Blockly.Blocks['makerbit_move_servo270'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "makerbit_move_servo270",
        "message0": "%3 servo (270°) %1 xoay góc %2 (0-270)",
        "args0": [
          
          {
            "type": "field_dropdown",
            "name": "servo",
            "options": [
              [
                "S1",
                "0"
              ],
              [
                "S2",
                "1"
              ],
              [
                "S3",
                "2"
              ],
              [
                "S4",
                "3"
              ],
              [
                "S5",
                "4"
              ],
              [
                "S6",
                "5"
              ],
              [
                "S7",
                "6"
              ],
              [
                "S8",
                "7"
              ]
            ]
          },
          {
            "type": "input_value",
            "name": "angle",
            "check": "Number"
          },
          {
            "type": "field_image",
            "src": "static/blocks/block_images/icon.webp",
            "width": 20,
            "height": 20,
            "alt": "*",
            "flipRtl": false
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": ColorBlock,
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python["makerbit_move_servo270"] = function (block) {
  var servo = block.getFieldValue("servo");
  var angle = Blockly.Python.valueToCode(block, 'angle', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "servo.position(" + servo + ", " + angle + ", max_degree=270)\n";
  return code;
};

Blockly.Blocks['makerbit_move_servo270_rotate'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "makerbit_move_servo270_rotate",
        "message0": "%1 servo (270°) %2 xoay %3 độ tốc độ %4 (ms) giới hạn góc %5 độ",
        "args0": [
          {
            "type": "field_image",
            "src": "static/blocks/block_images/icon.webp",
            "width": 20,
            "height": 20,
            "alt": "*",
            "flipRtl": false
          },
          {
            "type": "field_dropdown",
            "name": "servo",
            "options": [
              [
                "S1",
                "0"
              ],
              [
                "S2",
                "1"
              ],
              [
                "S3",
                "2"
              ],
              [
                "S4",
                "3"
              ],
              [
                "S5",
                "4"
              ],
              [
                "S6",
                "5"
              ],
              [
                "S7",
                "6"
              ],
              [
                "S8",
                "7"
              ]
            ]
          },
          {
            "type": "input_value",
            "name": "change",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "speed",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "limit",
            "check": "Number"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": ColorBlock,
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python["makerbit_move_servo270_rotate"] = function (block) {
  var servo = block.getFieldValue("servo");
  var change = Blockly.Python.valueToCode(block, 'change', Blockly.Python.ORDER_ATOMIC);
  var speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var limit = Blockly.Python.valueToCode(block, 'limit', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "servo.rotate(" + servo + ", " + change + ", " + speed + ", " + limit + ", max_degree=270)\n";
  return code;
};

Blockly.Blocks['makerbit_move_servo360'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "makerbit_move_servo360",
        "message0": "%1 servo (360°) %2 xoay với tốc độ %3(-100 đến 100)",
        "args0": [
          {
            "type": "field_image",
            "src": "static/blocks/block_images/icon.webp",
            "width": 20,
            "height": 20,
            "alt": "*",
            "flipRtl": false
          },
          {
            "type": "field_dropdown",
            "name": "servo",
            "options": [
              [
                "S1",
                "0"
              ],
              [
                "S2",
                "1"
              ],
              [
                "S3",
                "2"
              ],
              [
                "S4",
                "3"
              ],
              [
                "S5",
                "4"
              ],
              [
                "S6",
                "5"
              ],
              [
                "S7",
                "6"
              ],
              [
                "S8",
                "7"
              ]
            ]
          },
          {
            "type": "input_value",
            "name": "speed",
            "check": "Number"
          },
          
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": ColorBlock,
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python["makerbit_move_servo360"] = function (block) {
  var servo = block.getFieldValue("servo");
  var speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "servo.spin(" + servo + ", " + speed + ")\n";
  return code;
};

Blockly.Blocks["makerbit_move_servo_read_position"] = {
  init: function () {
    this.jsonInit({
      colour: ColorBlock,
      tooltip: "",
      message0: "%1 servo %2 lấy vị trí hiện tại",
      args0: [
        {
          "type": "field_image",
          "src": "static/blocks/block_images/icon.webp",
          "width": 20,
          "height": 20,
          "alt": "*",
          "flipRtl": false
        },
        {
          "type": "field_dropdown",
          "name": "servo",
          "options": [
            [
              "S1",
              "0"
            ],
            [
              "S2",
              "1"
            ],
            [
              "S3",
              "2"
            ],
            [
              "S4",
              "3"
            ],
            [
              "S5",
              "4"
            ],
            [
              "S6",
              "5"
            ],
            [
              "S7",
              "6"
            ],
            [
              "S8",
              "7"
            ]
          ]
        }
      ],
      output: "Number",
      helpUrl: ""
    });
  },
};

Blockly.Python["makerbit_move_servo_read_position"] = function (block) {
  var servo = block.getFieldValue("servo");
  // TODO: Assemble Python into code variable.
  var code = "servo.position(" + servo + ")";
  return [code, Blockly.Python.ORDER_NONE];
};

// Cảm biến siêu âm

Blockly.Blocks['makerbit_ultrasonic_create'] = {
  /**
   * Block for waiting.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "type": "makerbit_ultrasonic_create",
        "message0": Blockly.Msg.MAKERBIT_ULTRASONIC_CREATE_MESSAGE0,
        "args0": [
          {
            "type": "field_dropdown",
            "name": "TRG",
            "options": [
              [
                "P3",
                "pin3"
              ],
              [
                "P0",
                "pin0"
              ],
              [
                "P1",
                "pin1"
              ],
              [
                "P2",
                "pin2"
              ],
              [
                "P4",
                "pin4"
              ],
              [
                "P5",
                "pin5"
              ],
              [
                "P6",
                "pin6"
              ],
              [
                "P7",
                "pin7"
              ],
              [
                "P8",
                "pin8"
              ],
              [
                "P9",
                "pin9"
              ],
              [
                "P10",
                "pin10"
              ],
              [
                "P11",
                "pin11"
              ],
              [
                "P12",
                "pin12"
              ],
              [
                "P13",
                "pin13"
              ],
              [
                "P14",
                "pin14"
              ],
              [
                "P15",
                "pin15"
              ],
              [
                "P16",
                "pin16"
              ],
              [
                "P19",
                "pin19"
              ],
              [
                "P20",
                "pin20"
              ]
            ]
          },
          {
            "type": "field_dropdown",
            "name": "ECH",
            "options": [
              [
                "P6",
                "pin6"
              ],
              [
                "P0",
                "pin0"
              ],
              [
                "P1",
                "pin1"
              ],
              [
                "P2",
                "pin2"
              ],
              [
                "P3",
                "pin3"
              ],
              [
                "P4",
                "pin4"
              ],
              [
                "P5",
                "pin5"
              ],              
              [
                "P7",
                "pin7"
              ],
              [
                "P8",
                "pin8"
              ],
              [
                "P9",
                "pin9"
              ],
              [
                "P10",
                "pin10"
              ],
              [
                "P11",
                "pin11"
              ],              
              [
                "P12",
                "pin12"
              ],
              [
                "P13",
                "pin13"
              ],
              [
                "P14",
                "pin14"
              ],
              [
                "P15",
                "pin15"
              ],
              [
                "P16",
                "pin16"
              ],
              [
                "P19",
                "pin19"
              ],
              [
                "P20",
                "pin20"
              ]
            ]
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": ColorBlock,
        "tooltip": Blockly.Msg.MAKERBIT_ULTRASONIC_CREATE_TOOLTIP,
        "helpUrl": Blockly.Msg.MAKERBIT_ULTRASONIC_CREATE_HELPURL
      }
    );
  },
  getDeveloperVars: function() {
    return ['ultrasonic_makerbit'];
  }
};

Blockly.Python['makerbit_ultrasonic_create'] = function(block) {
  var dropdown_trg = block.getFieldValue('TRG');
  var dropdown_ech = block.getFieldValue('ECH');
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  Blockly.Python.definitions_['import_ultrasonic'] = 'from makerbit_hcsr04 import HCSR04';
  var code = 'ultrasonic_makerbit = HCSR04(trigger_pin=' + dropdown_trg + '.pin, echo_pin=' + dropdown_ech + '.pin)\n';
  return code;
};

Blockly.Blocks['makerbit_ultrasonic_read'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "makerbit_ultrasonic_read",
        "message0": Blockly.Msg.MAKERBIT_ULTRASONIC_READ_MESSAGE0,
        "args0": [
          {
            "type": "field_dropdown",
            "name": "TYPE",
            "options": [
              [
                "cm",
                "CM"
              ],
              [
                "mm",
                "MM"
              ]
            ]
          }
        ],
        "output": null,
        "colour": ColorBlock,
        "tooltip": Blockly.Msg.MAKERBIT_ULTRASONIC_READ_TOOLTIP,
        "helpUrl": Blockly.Msg.MAKERBIT_ULTRASONIC_READ_HELPURL
      }
    );
  },
  getDeveloperVars: function() {
    return ['ultrasonic_makerbit'];
  }
};

Blockly.Python['makerbit_ultrasonic_read'] = function(block) {
  var dropdown_type = block.getFieldValue('TYPE');
  // TODO: Assemble Python into code variable.
  var code = '';
  if (dropdown_type == 'CM') {
    code = 'ultrasonic_makerbit.distance_cm()';
  } else {
    code = 'ultrasonic_makerbit.distance_mm()';
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['makerbit_ultrasonic_checkdistance'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "makerbit_ultrasonic_checkdistance",
        "message0": Blockly.Msg.MAKERBIT_ULTRASONIC_CHECK_MESSAGE0,
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "DISTANCE",
            "check": "Number"
          },
          {
            "type": "field_dropdown",
            "name": "TYPE",
            "options": [
              [
                "cm",
                "CM"
              ],
              [
                "mm",
                "MM"
              ]
            ]
          }
        ],
        "output": "Boolean",
        "colour": ColorBlock,
        "tooltip": Blockly.Msg.MAKERBIT_ULTRASONIC_CHECK_TOOLTIP,
        "helpUrl": Blockly.Msg.MAKERBIT_ULTRASONIC_CHECK_HELPURL
      }
    );
  },
  getDeveloperVars: function() {
    return ['ultrasonic_makerbit'];
  }
};

Blockly.Python['makerbit_ultrasonic_checkdistance'] = function(block) {
  var value_distance = Blockly.Python.valueToCode(block, 'DISTANCE', Blockly.Python.ORDER_ATOMIC);
  var dropdown_type = block.getFieldValue('TYPE');
  // TODO: Assemble Python into code variable.
  var code = '';
  if (dropdown_type == 'CM')
    code = 'ultrasonic_makerbit.distance_cm() < ' + value_distance;
  else
    code = 'ultrasonic_makerbit.distance_mm() < ' + value_distance;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

// Cảm biến màu sắc

Blockly.Blocks["makerbit_input_color_sensor_read"] = {
  init: function () {
    this.jsonInit({
      colour: ColorBlock,
      tooltip: "",
      message0: "%2 cảm biến màu sắc đọc giá trị %1",
      args0: [
        {
          type: "field_dropdown",
          name: "RGB",
          options: [
            ["RED","r"],
            ["GREEN","g"],
            ["BLUE","b"],
          ],
        },
        {
          "type": "field_image",
          "src": "https://i.ibb.co/tsXx1MH/rgb.png",
          "width": 20,
          "height": 20,
          "alt": "*",
          "flipRtl": false
        }
      ],
      output: "Number",
      helpUrl: "",
    });
  },
};

Blockly.Blocks["makerbit_input_color_sensor_detect"] = {
  init: function () {
    this.jsonInit({
      colour: ColorBlock,
      tooltip: "",
      message0: "%2 cảm biến màu sắc phát hiện màu %1",
      args0: [
        {
          type: "field_dropdown",
          name: "color",
          options: [
            ["trắng","w"],
            ["đen","d"],
            ["đỏ","r"],
            ["xanh lá (green)", "g"],
            ["xanh dương (blue)", "b"],
            ["vàng", "y"]
          ],
        },
        {
          "type": "field_image",
          "src": "https://i.ibb.co/tsXx1MH/rgb.png",
          "width": 20,
          "height": 20,
          "alt": "*",
          "flipRtl": false
        }
      ],
      output: "Boolean",
      helpUrl: "",
    });
  },
};

Blockly.Python["makerbit_input_color_sensor_read"] = function (block) {
  var RGB = block.getFieldValue("RGB");
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_color_sensor'] = "from makerbit_tcs34725 import color_sensor";
  var code = "color_sensor.read('" + RGB +"')";
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["makerbit_input_color_sensor_detect"] = function (block) {
  var color = block.getFieldValue("color");
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_color_sensor'] = "from makerbit_tcs34725 import color_sensor";
  var code = "color_sensor.detect('" + color +"')";
  return [code, Blockly.Python.ORDER_NONE];
};

// Công tắc hành trình

// Blockly.Blocks['makerbit_endstop'] = {
//   init: function() {
//     this.jsonInit(
//       {
//         "type": "makerbit_endstop",
//         "message0": "công tắc hành trình bị đóng",
//         "args0": [
//           {
//             "type": "field_dropdown",
//             "name": "NAME",
//             "options": [
//               [
//                 "P1",
//                 "pin1"
//               ],
//               [
//                 "P0",
//                 "pin0"
//               ],              
//               [
//                 "P2",
//                 "pin2"
//               ],
//               [
//                 "P3",
//                 "pin3"
//               ],
//               [
//                 "P4",
//                 "pin4"
//               ],
//               [
//                 "P5",
//                 "pin5"
//               ],
//               [
//                 "P6",
//                 "pin6"
//               ],
//               [
//                 "P7",
//                 "pin7"
//               ],
//               [
//                 "P8",
//                 "pin8"
//               ],
//               [
//                 "P9",
//                 "pin9"
//               ],
//               [
//                 "P10",
//                 "pin10"
//               ],
//               [
//                 "P11",
//                 "pin11"
//               ],
//               [
//                 "P12",
//                 "pin12"
//               ],
//               [
//                 "P13",
//                 "pin13"
//               ],
//               [
//                 "P14",
//                 "pin14"
//               ],
//               [
//                 "P15",
//                 "pin15"
//               ],
//               [
//                 "P16",
//                 "pin16"
//               ],
//               [
//                 "P19",
//                 "pin19"
//               ],
//               [
//                 "P20",
//                 "pin20"
//               ]
//             ]
//           }
//         ],
//         "output": null,
//         "colour": ColorBlock,
//         "tooltip": "Trả về giá trị (0) hoặc (1) của ccông tắc hành trình",
//         "helpUrl": ""
//       }
//     );
//   }
// };

// Blockly.Python['makerbit_endstop'] = function(block) {
//   Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
//   var dropdown_name = block.getFieldValue('NAME');
//   // TODO: Assemble Python into code variable.
//   var code = dropdown_name + '.read_digital() == 0';
//   // TODO: Change ORDER_NONE to the correct strength.
//   return [code, Blockly.Python.ORDER_NONE];
// };


Blockly.Blocks["makerbit_ir_recv"] = {
  init: function () {
    this.jsonInit({
      colour: ColorBlock,
      tooltip: "",
      message0: "%1 nút %2 trên remote được nhấn",
      args0: [
        {
          "type": "field_image",
          "src": "https://i.ibb.co/dtYR9mJ/remote.png",
          "width": 20,
          "height": 20,
          "alt": "*",
          "flipRtl": false
        },
        {
          type: "field_dropdown",
          name: "remote",
          options: [
            ["A", "A"],
            ["B", "B"],
            ["C", "C"],
            ["D", "D"],
            ["E", "E"],
            ["F", "F"],
            [
              {
                "src": "https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolobit_homebit_v3/images/forward.svg",
                "width": 15,
                "height": 15,
                "alt": "*"
              },
              "UP"
            ],
            [
              {
                "src": "https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolobit_homebit_v3/images/backward.svg",
                "width": 15,
                "height": 15,
                "alt": "*"
              },
              "DOWN"
            ],
            [
              {
                "src": "https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolobit_homebit_v3/images/turn_left.svg",
                "width": 15,
                "height": 15,
                "alt": "*"
              },
              "LEFT"
            ],
            [
              {
                "src": "https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolobit_homebit_v3/images/turn_right.svg",
                "width": 15,
                "height": 15,
                "alt": "*"
              },
              "RIGHT"
            ],
            ["Setup", "SETUP"],
            ["0", "0"],
            ["1", "1"],
            ["2", "2"],
            ["3", "3"],
            ["4", "4"],
            ["5", "5"],
            ["6", "6"],
            ["7", "7"],
            ["8", "8"],
            ["9", "9"],
          ],
        },
      ],
      output: "Boolean",
      helpUrl: "",
    });
  },
  getDeveloperVars: function() {
    return ['ir_rx'];
  }
};


Blockly.Blocks["makerbit_ir_clear"] = {
  init: function () {
    this.jsonInit({
      colour: ColorBlock,
      tooltip: "",
      message0: "%1 xóa tín hiệu đã thu được",
      args0: [
        {
          "type": "field_image",
          "src": "https://i.ibb.co/dtYR9mJ/remote.png",
          "width": 20,
          "height": 20,
          "alt": "*",
          "flipRtl": false
        }
      ],
      previousStatement: null,
      nextStatement: null,
      helpUrl: "",
    });
  },
  getDeveloperVars: function() {
    return ['ir_rx'];
  }
};

Blockly.Blocks["makerbit_ir_on_receive"] = {
  init: function () {
    this.jsonInit({
      colour: ColorBlock,
      message0: "nếu %1 nhận được %2 %3 %4 từ remote",
      args0: [
        {
          "type": "field_image",
          "src": "https://i.ibb.co/dtYR9mJ/remote.png",
          "width": 20,
          "height": 20,
          "alt": "*",
          "flipRtl": false
        },
        {
          variable: "tín hiệu",
          type: "field_variable",
          name: "message",
        },
        {
          type: "input_dummy",
        },
        {
          type: "input_statement",
          name: "ACTION",
        },
      ],
      helpUrl: "",
    });
  },
  getDeveloperVars: function() {
    return ['ir_rx'];
  }
};

Blockly.Blocks["makerbit_ir_remote_btn"] = {
  init: function () {
    this.jsonInit({
      colour: ColorBlock,
      tooltip: "",
      message0: "nút %1",
      args0: [
        {
          type: "field_dropdown",
          name: "remote",
          options: [
            ["A", "A"],
            ["B", "B"],
            ["C", "C"],
            ["D", "D"],
            ["E", "E"],
            ["F", "F"],
            [
              {
                "src": "https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolobit_homebit_v3/images/forward.svg",
                "width": 15,
                "height": 15,
                "alt": "*"
              },
              "UP"
            ],
            [
              {
                "src": "https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolobit_homebit_v3/images/backward.svg",
                "width": 15,
                "height": 15,
                "alt": "*"
              },
              "DOWN"
            ],
            [
              {
                "src": "https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolobit_homebit_v3/images/turn_left.svg",
                "width": 15,
                "height": 15,
                "alt": "*"
              },
              "LEFT"
            ],
            [
              {
                "src": "https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolobit_homebit_v3/images/turn_right.svg",
                "width": 15,
                "height": 15,
                "alt": "*"
              },
              "RIGHT"
            ],
            ["Setup", "SETUP"],
            ["0", "0"],
            ["1", "1"],
            ["2", "2"],
            ["3", "3"],
            ["4", "4"],
            ["5", "5"],
            ["6", "6"],
            ["7", "7"],
            ["8", "8"],
            ["9", "9"],
          ],
        },
      ],
      output: "Boolean",
      helpUrl: "",
    });
  }
};


// PYTHON

Blockly.Python["makerbit_ir_recv"] = function (block) {
  var remote = block.getFieldValue("remote");
  // TODO: Assemble Python into code variable.
  var code = 'ir_rx.get_code() == IR_REMOTE_' + remote;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["makerbit_ir_clear"] = function (block) {
  // TODO: Assemble Python into code variable.
  var code = 'ir_rx.clear_code()\n';
  return code;
};

Blockly.Python["makerbit_ir_remote_btn"] = function (block) {
  var remote = block.getFieldValue("remote");
  // TODO: Assemble Python into code variable.
  var code = 'IR_REMOTE_' + remote;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['makerbit_ir_on_receive'] = function(block) {
  var variable_message = Blockly.Python.variableDB_.getName(block.getFieldValue('message'), Blockly.Variables.NAME_TYPE);
  var statements_action = Blockly.Python.statementToCode(block, 'ACTION');

  var globals = [];
  var varName;
  var workspace = block.workspace;
  var variables = workspace.getAllVariables() || [];
  for (var i = 0, variable; variable = variables[i]; i++) {
    varName = variable.name;
    if (variable_message != Blockly.Python.variableDB_.getName(varName, Blockly.Variables.NAME_TYPE))
      globals.push(Blockly.Python.variableDB_.getName(varName,
        Blockly.Variables.NAME_TYPE));
  }
  globals = globals.length ? Blockly.Python.INDENT + 'global ' + globals.join(', ') : '';

  var cbFunctionName = Blockly.Python.provideFunction_(
    'on_ir_receive_callback',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(' + variable_message + ', addr, ext):',
      globals,
      statements_action || Blockly.Python.PASS
    ]);
  
  var code = 'ir_rx.on_received(' + cbFunctionName + ')\n';
  Blockly.Python.definitions_['on_ir_receive_callback' + '_statement'] = code;

  return '';
};

Blockly.Blocks['carbit_check_line_sensor'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "carbit_check_line_sensor",
        "message0": Blockly.Msg.CARBIT_CHECK_LINE_SENSOR_MESSAGE0,
        "args0": [
          {
            "type": "field_dropdown",
            "name": "NAME1",
            "options": [
              [
                Blockly.Msg.CARBIT_CHECK_LINE_SENSOR_MESSAGE1,
                "pin0"
              ],
              [
                Blockly.Msg.CARBIT_CHECK_LINE_SENSOR_MESSAGE2,
                "pin1"
              ]
            ]
          },
          {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [
              [
                ">",
                ">"
              ],
              [
                "<",
                "<"
              ]
            ]
          },
          {
            "type": "input_value",
            "name": "num"
          }
        ],
        "inputsInline": true,
        "output": null,
        "colour": "#cb2026",
        "tooltip": Blockly.Msg.CARBIT_CHECK_LINE_SENSOR_TOOLTIP,
        "helpUrl": Blockly.Msg.CARBIT_CHECK_LINE_SENSOR_HELPURL
      }
    );
  }
};

Blockly.Python['carbit_check_line_sensor'] = function(block) {
  Blockly.Python.definitions_['import_car'] = 'from carbit import *';
  var dropdown_name1 = block.getFieldValue('NAME1');
  var dropdown_name = block.getFieldValue('NAME');
  var value_name = Blockly.Python.valueToCode(block, 'num', Blockly.Python.ORDER_ATOMIC);
  var code = dropdown_name1+'.read_analog()'+dropdown_name+value_name;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['carbit_line_sensor_read_analog'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "block_type",
        "message0": Blockly.Msg.CARBIT_LINE_SENSOR_READ_ANALOG_MESSAGE0,
        "args0": [
          {
            "type": "field_dropdown",
            "name": "NAME1",
            "options": [
              [
                Blockly.Msg.CARBIT_LINE_SENSOR_READ_ANALOG_MESSAGE1,
                "pin0"
              ],
              [
                Blockly.Msg.CARBIT_LINE_SENSOR_READ_ANALOG_MESSAGE2,
                "pin1"
              ]
            ]
          }
        ],
        "output": null,
        "colour": "#cb2026",
        "tooltip": Blockly.Msg.CARBIT_LINE_SENSOR_READ_ANALOG_TOOLTIP,
        "helpUrl": Blockly.Msg.CARBIT_LINE_SENSOR_READ_ANALOG_HELPURL

      }
    );
  }
};

Blockly.Python['carbit_line_sensor_read_analog'] = function(block) {
  Blockly.Python.definitions_['import_car'] = 'from carbit import *';
  var dropdown_name1 = block.getFieldValue('NAME1');
  var code = dropdown_name1+ '.read_analog()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['carbit_ledRGB'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "carbit_ledRGB",
        "message0": Blockly.Msg.CARBIT_LEDRGB_MESSAGE0,
        "args0": [
          {
            "type": "field_colour",
            "name": "color",
            "colour": "#33ccff"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#cb2026",
        "tooltip": Blockly.Msg.CARBIT_LEDRGB_TOOLTIP,
        "helpUrl": Blockly.Msg.CARBIT_LEDRGB_HELPURL
      }
    );
  }
}; 