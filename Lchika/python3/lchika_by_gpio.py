# Lchika using GPIO lib
import RPi.GPIO as GPIO
import time
GPIO.setmode(GPIO.BOARD)
GPIO.setup(40, GPIO.OUT) # Set pin number. is not GPIO number
while True:
    GPIO.output(40, True)
    time.sleep(1)
    GPIO.output(40, False)
    time.sleep(1)
