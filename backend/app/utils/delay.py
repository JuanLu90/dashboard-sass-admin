import asyncio
import random
import os

DEV_MODE = os.getenv("DEV_MODE", "false").lower() == "true"
FORCE_DELAY = os.getenv("FORCE_DELAY", "true").lower() == "true"

async def simulate_delay(min_time: float = 0.3, max_time: float = 1.2):
    """
    Simulate network latency or processing time for demo purposes.
    Only active in DEV_MODE or when FORCE_DELAY=true.
    """
    if DEV_MODE or FORCE_DELAY:
        await asyncio.sleep(random.uniform(min_time, max_time))
