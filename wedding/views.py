from django.conf import settings
from django.shortcuts import render
from django.utils import translation
from django.contrib.auth.decorators import login_required

from guests.save_the_date import SAVE_THE_DATE_CONTEXT_MAP


def home(request):
    return render(request, 'home2.html', context={
        'save_the_dates': SAVE_THE_DATE_CONTEXT_MAP,
        'support_email': settings.DEFAULT_WEDDING_REPLY_EMAIL,
    })
