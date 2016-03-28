define('localization/saleslogix/es', ['localization/es', 'Mobile/SalesLogix/ApplicationModule'], function() {

localize("argos.Calendar", {
  "timeFormatText": "h:mm A",
  "titleText": "Calendario",
  "amText": "AM",
  "pmText": "PM",
  "monthsShortText": {
    "0": "Ene",
    "1": "Feb",
    "2": "Mar",
    "3": "Abr",
    "4": "Mayo",
    "5": "Jun",
    "6": "Jul",
    "7": "Ago",
    "8": "Sep",
    "9": "Oct",
    "10": "Nov",
    "11": "Dic"
  }
});

localize("argos.Fields.DateField", {
  "dateFormatText": "DD/MM/YYYY",
  "emptyText": "",
  "invalidDateFormatErrorText": "Campo '${0}' tiene un formato de fecha inválido."
});

localize("argos.Format", {
  "shortDateFormatText": "D/M/YYYY",
  "percentFormatText": "${0}${1}",
  "yesText": "Si",
  "noText": "No",
  "trueText": "T",
  "falseText": "F",
  "hoursText": "horas",
  "hourText": "hora",
  "minutesText": "minutos",
  "minuteText": "minuto",
  "bytesText": "bytes"
});

localize("crm.GroupUtility", {
  "groupDateFormatText": "D/M/YYYY h:mm:ss A"
});

localize("crm.Recurrence", {
  "dayFormatText": "DD",
  "monthFormatText": "MM",
  "monthAndDayFormatText": "DD/MM",
  "weekdayFormatText": "dddd",
  "endDateFormatText": "D/M/YYYY",
  "neverText": "Nunca",
  "daysText": "días",
  "dailyText": "Diariamente",
  "weeksText": "semanas",
  "weeklyText": "Semanal",
  "weeklyOnText": "Semanal en ${3}",
  "monthsText": "meses",
  "monthlyText": "Mensual",
  "monthlyOnDayText": "Mensual el día ${1}",
  "monthlyOnText": "Mensual en ${5} ${3}",
  "yearsText": "años",
  "yearlyText": "Anualmente",
  "yearlyOnText": "Anualmente en ${2}",
  "yearlyOnWeekdayText": "Anualmente en ${5} ${3} entre ${4}",
  "everyText": "cada ${0} ${1}",
  "afterCompletionText": "después de finalizado",
  "untilEndDateText": "${0} hasta ${1}",
  "weekDaysText": {
    "0": "Domingo",
    "1": "Lunes",
    "2": "Martes",
    "3": "Miércoles",
    "4": "Jueves",
    "5": "Viernes",
    "6": "Sábado"
  },
  "ordText": {
    "0": "día",
    "1": "primero",
    "2": "segundo",
    "3": "tercero",
    "4": "cuarto",
    "5": "último"
  }
});

localize("crm.Views.Activity.Complete", {
  "completedFormatText": "D/M/YYYY h:mm A",
  "startingFormatText": "D/M/YYYY h:mm A",
  "startingTimelessFormatText": "D/M/YYYY",
  "activityInfoText": "Información Actividad",
  "accountText": "cuenta",
  "contactText": "contacto",
  "opportunityText": "oportunidad",
  "ticketNumberText": "ticket",
  "companyText": "compañía",
  "leadText": "lead",
  "asScheduledText": "según programado",
  "categoryText": "categoría",
  "categoryTitleText": "Categoría de la Actividad",
  "completedText": "fecha completado",
  "completionText": "Finalización",
  "durationText": "duración",
  "durationInvalidText": "El campo '${2}' debe tener un valor.",
  "carryOverNotesText": "traspasar notas",
  "followUpText": "seguimiento",
  "followUpTitleText": "Tipo de seguimiento",
  "leaderText": "líder",
  "longNotesText": "notas",
  "longNotesTitleText": "Notas",
  "otherInfoText": "Otra Información",
  "priorityText": "prioridad",
  "priorityTitleText": "Prioridad",
  "regardingText": "asunto",
  "regardingTitleText": "Asunto de la Actividad",
  "resultText": "resultado",
  "resultTitleText": "Resultado",
  "startingText": "fecha inicio",
  "timelessText": "sin tiempo",
  "durationValueText": {
    "0": "ninguno",
    "15": "15 minutos",
    "30": "30 minutos",
    "60": "1 hora",
    "90": "1.5 horas",
    "120": "2 horas"
  },
  "followupValueText": {
    "none": "Ninguno",
    "atPhoneCall": "Llamada Telefónica",
    "atAppointment": "Reunión",
    "atToDo": "Tarea",
    "atPersonal": "Actividad Personal"
  }
});

localize("crm.Views.Activity.Detail", {
  "startDateFormatText": "D/M/YYYY h:mm:ss A",
  "timelessDateFormatText": "D/M/YYYY",
  "alarmDateFormatText": "D/M/YYYY h:mm:ss A",
  "activityTypeText": {
    "atToDo": "Tarea",
    "atPhoneCall": "Llamada Telefónica",
    "atAppointment": "Reunión",
    "atLiterature": "Solicitud de Literatura",
    "atPersonal": "Actividad Personal"
  },
  "actionsText": "Acciones Rápidas",
  "completeActivityText": "Completar Actividad",
  "completeOccurrenceText": "Completar Ocurrencia",
  "completeSeriesText": "Completar Series",
  "locationText": "ubicación",
  "alarmText": "alarma",
  "alarmTimeText": "alarma",
  "categoryText": "categoría",
  "durationText": "duración",
  "leaderText": "líder",
  "longNotesText": "notas",
  "priorityText": "prioridad",
  "regardingText": "asunto",
  "rolloverText": "auto programar",
  "startTimeText": "fecha inicio",
  "allDayText": "todo el día",
  "timelessText": "sin-tiempo",
  "titleText": "Actividad",
  "typeText": "tipo",
  "companyText": "compañía",
  "leadText": "lead",
  "accountText": "cuenta",
  "contactText": "contacto",
  "opportunityText": "oportunidad",
  "ticketNumberText": "ticket",
  "whenText": "Cuando",
  "whoText": "Quién",
  "recurrenceText": "recurrencia",
  "confirmEditRecurrenceText": "Editar todas las Incidencias? Cancelar para editar una Incidencia.",
  "relatedAttachmentText": "Archivos Adjuntos",
  "relatedAttachmentTitleText": "Archivos Adjuntos de la Actividad",
  "relatedItemsText": "Ítems relacionados",
  "phoneText": "teléfono",
  "moreDetailsText": "Más Detalles"
});

localize("crm.Views.Activity.Edit", {
  "startingFormatText": "D/M/YYYY h:mm A",
  "startingTimelessFormatText": "D/M/YYYY",
  "activityCategoryTitleText": "Categoría de la Actividad",
  "activityDescriptionTitleText": "Descripción de la Actividad",
  "locationText": "ubicación",
  "activityTypeTitleText": "Tipo de Actividad",
  "alarmText": "alarma",
  "reminderText": "recordatorio",
  "categoryText": "categoría",
  "durationText": "duración",
  "durationTitleText": "Duración",
  "durationInvalidText": "El campo '${2}' debe tener un valor.",
  "reminderInvalidText": "El campo 'recordatorio' debe tener un valor.",
  "reminderTitleText": "Recordatorio",
  "leaderText": "líder",
  "longNotesText": "notas",
  "longNotesTitleText": "Notas",
  "priorityText": "prioridad",
  "priorityTitleText": "Prioridad",
  "regardingText": "asunto",
  "rolloverText": "auto programar",
  "startingText": "fecha inicio",
  "repeatsText": "repeticiones",
  "recurringText": "periodicidad",
  "recurringTitleText": "Periodicidad",
  "timelessText": "sin tiempo",
  "titleText": "Actividad",
  "typeText": "tipo",
  "accountText": "cuenta",
  "contactText": "contacto",
  "opportunityText": "oportunidad",
  "ticketNumberText": "ticket",
  "companyText": "compañía",
  "leadText": "lead",
  "isLeadText": "para lead",
  "yesText": "SI",
  "noText": "NO",
  "phoneText": "teléfono",
  "updateUserActErrorText": "Ha ocurrido un error actualizando las actividades del usuario.",
  "reminderValueText": {
    "0": "ninguno",
    "5": "5 minutos",
    "15": "15 minutos",
    "30": "30 minutos",
    "60": "1 hora",
    "1440": "1 día"
  },
  "durationValueText": {
    "0": "ninguno",
    "15": "15 minutos",
    "30": "30 minutos",
    "60": "1 hora",
    "90": "1.5 horas",
    "120": "2 horas"
  }
});

localize("crm.Views.Attachment.List", {
  "attachmentDateFormatText": "ddd D/M/YYYY hh:mm:ss",
  "titleText": "Archivos Adjuntos",
  "uploadedOnText": "Cargado ",
  "hashTagQueriesText": {
    "url": "url",
    "binary": "binario"
  }
});

localize("crm.Views.Attachment.ViewAttachment", {
  "attachmentDateFormatText": "ddd D/M/YYYY h:mm a",
  "detailsText": "Detalles Archivos Adjuntos",
  "descriptionText": "descripción",
  "fileNameText": "nombre de archivo",
  "attachDateText": "fecha adjunto",
  "fileSizeText": "tamaño del archivo",
  "userText": "usuario",
  "attachmentNotSupportedText": "El tipo de archivo adjunto no es soportado para ser visualizado.",
  "downloadingText": "Descargando Archivo Adjunto ...",
  "notSupportedText": "La visualización de archivos adjuntos no es soportada por su dispositivo."
});

localize("crm.Views.Calendar.DayView", {
  "eventDateFormatText": "D/M/YYYY",
  "dateHeaderFormatText": "dddd, D/M/YYYY",
  "startTimeFormatText": "h:mm A",
  "titleText": "Calendario",
  "todayText": "Hoy",
  "dayText": "Día",
  "weekText": "Semana",
  "monthText": "Mes",
  "allDayText": "Todo el Día",
  "eventHeaderText": "Eventos",
  "activityHeaderText": "Actividades",
  "eventMoreText": "Ver Más Evento(s)",
  "toggleCollapseText": "contraer"
});

localize("crm.Views.Calendar.MonthView", {
  "monthTitleFormatText": "MMMM YYYY",
  "dayTitleFormatText": "ddd D MMM, YYYY",
  "eventDateFormatText": "D/M/YYYY",
  "startTimeFormatText": "h:mm A",
  "titleText": "Calendario",
  "todayText": "Hoy",
  "dayText": "Día",
  "weekText": "Semana",
  "monthText": "Mes",
  "allDayText": "Todo el Día",
  "eventText": "Evento",
  "eventHeaderText": "Eventos",
  "countMoreText": "Ver Más",
  "activityHeaderText": "Actividades",
  "toggleCollapseText": "contraer",
  "weekDaysShortText": {
    "0": "Dom",
    "1": "Lun",
    "2": "Mar",
    "3": "Mié",
    "4": "Jue",
    "5": "Vie",
    "6": "Sáb"
  }
});

localize("crm.Views.Calendar.WeekView", {
  "weekTitleFormatText": "MMM D, YYYY",
  "dayHeaderLeftFormatText": "dddd",
  "dayHeaderRightFormatText": "MMM D, YYYY",
  "eventDateFormatText": "D/M/YYYY",
  "startTimeFormatText": "h:mm A",
  "titleText": "Calendario",
  "todayText": "Hoy",
  "dayText": "Día",
  "weekText": "Semana",
  "monthText": "Mes",
  "allDayText": "Todo el Día",
  "eventHeaderText": "Eventos",
  "eventMoreText": "Ver ${0} Más Evento(s)",
  "toggleCollapseText": "contraer"
});

localize("crm.Views.ErrorLog.Detail", {
  "errorDateFormatText": "DD/MM/YYYY hh:mm A",
  "titleText": "Registro de Error",
  "detailsText": "Detalles",
  "errorDateText": "fecha",
  "statusTextText": "error",
  "urlText": "url",
  "moreDetailsText": "Más Detalles",
  "errorText": "error",
  "emailSubjectText": "Error recibido en SalesLogix Mobile Client",
  "copiedSuccessText": "Copiado al portapapeles"
});

localize("crm.Views.ErrorLog.List", {
  "errorDateFormatText": "DD/MM/YYYY hh:mm A",
  "titleText": "Registros de Error"
});

localize("crm.Views.Event.Detail", {
  "startDateFormatText": "D/M/YYYY h:mm:ss A",
  "endDateFormatText": "D/M/YYYY h:mm:ss A",
  "eventTypeText": {
    "atToDo": "Tarea",
    "atPhoneCall": "Llamada Telefónica",
    "atAppointment": "Reunión",
    "atLiterature": "Solicitud de Literatura",
    "atPersonal": "Actividad Personal"
  },
  "actionsText": "Acciones Rápidas",
  "startTimeText": "fecha inicio",
  "endTimeText": "fecha fin",
  "titleText": "Evento",
  "descriptionText": "descripción",
  "typeText": "tipo",
  "whenText": "Cuando"
});

localize("crm.Views.Event.Edit", {
  "startingFormatText": "D/M/YYYY h:mm A",
  "titleText": "Evento",
  "typeText": "tipo",
  "descriptionText": "descripción",
  "startDateText": "fecha inicio",
  "endDateText": "fecha fin",
  "eventTypesText": {
    "Vacation": "Vacaciones",
    "Business Trip": "Viaje de Negocios",
    "Conference": "Conferencia",
    "Holiday": "Festivo"
  }
});

localize("crm.Views.Event.List", {
  "eventDateFormatText": "D/M/YYYY",
  "titleText": "Eventos",
  "eventText": "Evento"
});

localize("crm.Views.History.Detail", {
  "dateFormatText": "D/M/YYYY h:mm:ss A",
  "categoryText": "categoría",
  "completedText": "completado",
  "durationText": "duración",
  "leaderText": "líder",
  "longNotesText": "notas",
  "notesText": "Notas",
  "priorityText": "prioridad",
  "regardingText": "asunto",
  "completedByText": "completado por",
  "scheduledText": "programado",
  "timelessText": "sin-tiempo",
  "companyText": "compañía",
  "leadText": "lead",
  "titleText": "Historial",
  "accountText": "cuenta",
  "contactText": "contacto",
  "opportunityText": "oportunidad",
  "ticketNumberText": "ticket",
  "moreDetailsText": "Más Detalles",
  "relatedItemsText": "Ítems relacionados",
  "relatedAttachmentText": "Archivos Adjuntos",
  "relatedAttachmentTitleText": "Archivos Adjuntos del Historial",
  "modifiedText": "modificado",
  "typeText": "tipo",
  "activityTypeText": {
    "atToDo": "Tarea",
    "atPhoneCall": "Llamada Telefónica",
    "atAppointment": "Reunión",
    "atLiterature": "Solicitud de Literatura",
    "atPersonal": "Actividad Personal",
    "atQuestion": "Pregunta",
    "atEMail": "E-mail"
  }
});

localize("crm.Views.History.Edit", {
  "startingFormatText": "D/M/YYYY h:mm A",
  "accountText": "cuenta",
  "noteDescriptionTitleText": "Descripción de la Nota",
  "contactText": "contacto",
  "longNotesText": "notas",
  "longNotesTitleText": "Notas",
  "opportunityText": "oportunidad",
  "ticketNumberText": "ticket",
  "regardingText": "asunto",
  "isLeadText": "para lead",
  "startingText": "hora",
  "titleText": "Nota",
  "companyText": "compañía",
  "leadText": "lead",
  "relatedItemsText": "Ítems relacionados",
  "yesText": "SI",
  "noText": "NO",
  "validationText": "El campo '${2}' debe tener un valor",
  "validationCanEditText": "Usted no está autorizado para editar"
});

localize("crm.Views.History.List", {
  "hourMinuteFormatText": "h:mm A",
  "dateFormatText": "D/M/YY",
  "activityTypeText": {
    "atToDo": "Tarea",
    "atPhoneCall": "Llamada Telefónica",
    "atAppointment": "Reunión",
    "atLiterature": "Solicitud de Literatura",
    "atPersonal": "Actividad Personal",
    "atQuestion": "Pregunta",
    "atEMail": "E-mail"
  },
  "hashTagQueriesText": {
    "my-history": "mi-historial",
    "note": "nota",
    "phonecall": "llamada-telefónica",
    "meeting": "reunión",
    "personal": "personal",
    "email": "e-mail"
  },
  "titleText": "Notas/Historial",
  "viewAccountActionText": "Cuenta",
  "viewOpportunityActionText": "Oportunidad",
  "viewContactActionText": "Contacto",
  "addAttachmentActionText": "Adicionar Archivo Adjunto",
  "regardingText": "Asunto: "
});

localize("crm.Views.Opportunity.Detail", {
  "exchangeRateDateFormatText": "D/M/YYYY h:mm A",
  "accountText": "cta.",
  "acctMgrText": "gte. cta.",
  "estCloseText": "cierre estimado",
  "detailsText": "Detalles",
  "fbarHomeTitleText": "inicio",
  "fbarScheduleTitleText": "programar",
  "importSourceText": "lead origen",
  "opportunityText": "oportunidad",
  "ownerText": "propietario",
  "actionsText": "Acciones Rápidas",
  "potentialText": "potencial de ventas",
  "potentialBaseText": "potencial de ventas (tasa base)",
  "potentialOpportunityText": "potencial de ventas (tasa opor.)",
  "potentialMyRateText": "potencial de ventas (mi tasa)",
  "probabilityText": "prob. cierre",
  "relatedActivitiesText": "Actividades",
  "relatedContactsText": "Contactos de la Oportunidad",
  "relatedHistoriesText": "Notas/Historial",
  "relatedItemsText": "Ítems relacionados",
  "relatedNotesText": "Notas",
  "relatedProductsText": "Productos",
  "relatedAttachmentText": "Archivos Adjuntos",
  "relatedAttachmentTitleText": "Archivos Adjuntos de la Oportunidad",
  "resellerText": "distribuidor",
  "statusText": "estatus",
  "titleText": "Oportunidad",
  "typeText": "tipo",
  "scheduleActivityText": "Programar actividad",
  "addNoteText": "Adicionar nota",
  "moreDetailsText": "Más Detalles",
  "multiCurrencyText": "Multi Moneda",
  "multiCurrencyRateText": "tasa de cambio",
  "multiCurrencyCodeText": "código",
  "multiCurrencyDateText": "fecha tasa",
  "multiCurrencyLockedText": "tasa bloqueada"
});

localize("crm.Views.Opportunity.Edit", {
  "exchangeRateDateFormatText": "D/M/YYYY h:mm A",
  "accountText": "cta.",
  "acctMgrText": "gte. cta.",
  "estCloseText": "cierre estimado",
  "importSourceText": "lead origen",
  "detailsText": "Detalles",
  "opportunityStatusTitleText": "Estatus Oportunidad",
  "opportunityText": "oportunidad",
  "opportunityTypeTitleText": "Tipo de Oportunidad",
  "ownerText": "propietario",
  "potentialText": "potencial de ventas",
  "probabilityText": "prob. cierre",
  "probabilityTitleText": "Probabilidad de la Oportunidad",
  "resellerText": "distribuidor",
  "statusText": "estatus",
  "titleText": "Oportunidad",
  "typeText": "tipo",
  "multiCurrencyText": "Multi Moneda",
  "multiCurrencyRateText": "tasa de cambio",
  "multiCurrencyCodeText": "código",
  "multiCurrencyDateText": "fecha tasa",
  "multiCurrencyLockedText": "tasa bloqueada",
  "subTypePickListResellerText": "DISTRIBUIDOR"
});

localize("crm.Views.TicketActivity.Edit", {
  "startingFormatText": "D/M/YYYY h:mm A",
  "titleText": "Editar Actividad del Ticket",
  "activityTypeText": "tipo",
  "activityTypeTitleText": "Tipo",
  "publicAccessText": "acceso público",
  "publicAccessTitleText": "Acceso Público",
  "userText": "usuario",
  "startDateText": "fecha inicio",
  "endDateText": "fecha fin",
  "commentsText": "comentarios"
});

localize("crm.Views.TicketActivity.List", {
  "startDateFormatText": "DD/MM/YYYY h:mm A",
  "titleText": "Actividades del Ticket"
});

localize("argos.ErrorManager", {
  "abortedText": "Anulado",
  "scopeSaveText": "El ámbito no se guarda en el reporte de errores"
});

localize("argos.Fields.DurationField", {
  "emptyText": "",
  "invalidDurationErrorText": "Campo '${0}' no es una duración válida.",
  "autoCompleteText": {
    "1": "minuto(s)",
    "60": "hora(s)",
    "1440": "día(s)",
    "10080": "semana(s)",
    "525960": "año(s)"
  }
});

localize("argos.Fields.EditorField", {
  "lookupLabelText": "editar",
  "lookupText": "...",
  "emptyText": "vacío",
  "completeText": "Ok"
});

localize("argos.Fields.LookupField", {
  "dependentErrorText": "Un valor para '${0}' debe ser seleccionado.",
  "emptyText": "",
  "completeText": "Seleccionar",
  "lookupLabelText": "búsqueda",
  "lookupText": "..."
});

localize("argos.Fields.SignatureField", {
  "signatureLabelText": "firma",
  "signatureText": "..."
});

localize("argos.GroupedList", {
  "toggleCollapseText": "contraer"
});

localize("argos.Groups.DateTimeSection", {
  "displayNameText": "Sección Fecha Hora",
  "todayText": "Hoy",
  "tomorrowText": "Mañana",
  "laterThisWeekText": "A finales de está semana",
  "earlierThisWeekText": "A principios de está semana",
  "thisLaterMonthText": "A finales de esté mes",
  "thisEarlierMonthText": "A principios de esté mes",
  "thisYearEarlierText": "A principios de esté año",
  "thisYearLaterText": "A finales de esté año",
  "yesterdayText": "Ayer",
  "lastWeekText": "Última semana",
  "lastMonthText": "Último mes",
  "pastYearText": "Último(s) año(s)",
  "nextYearText": "Siguiente año",
  "nextMonthText": "Siguiente mes",
  "nextWeekText": "Siguiente semana",
  "futureText": "Futuro",
  "twoWeeksAgoText": "Hace dos semanas",
  "threeWeeksAgoText": "Hace tres semanas",
  "twoMonthsAgoText": "Hace dos meses",
  "threeMonthsAgoText": "Hace tres meses",
  "unknownText": "Desconocido"
});

localize("argos.Groups.GroupByValueSection", {
  "displayNameText": "Agrupado Por la Sección Valor"
});

localize("argos.MainToolbar", {
  "titleText": "Celular"
});

localize("argos.RelatedViewWidget", {
  "nodataText": "no se encontraron registros ...",
  "selectMoreDataText": "ver ${0} más de ${1} ... ",
  "navToListText": "ver la lista",
  "loadingText": "cargando ... ",
  "refreshViewText": "actualizar",
  "itemOfCountText": " ${0} de ${1}",
  "totalCountText": " (${0})",
  "titleText": "Vista Relacionada"
});

localize("argos.SearchWidget", {
  "searchText": "Buscar"
});

localize("argos.SelectionModel", {
  "requireSelectionText": "Una selección es requerida, usted no puede des seleccionar el último ítem."
});

localize("argos.View", {
  "titleText": "Vista Genérica"
});

localize("argos.Views.ConfigureQuickActions", {
  "titleText": "Configure Acciones Rápidas"
});

localize("argos.Views.FileSelect", {
  "titleText": "Seleccionar Archivo",
  "addFileText": "Hacer Clic o Tocar aquí para adicionar un archivo.",
  "uploadText": "Subir",
  "cancelText": "Cancelar",
  "selectFileText": "Seleccionar archivo",
  "loadingText": "Cargando...",
  "descriptionText": "descripción",
  "bytesText": "bytes",
  "notSupportedText": "No es posible adjuntar archivos desde su dispositivo."
});

localize("argos.Views.Signature", {
  "titleText": "firma",
  "clearCanvasText": "Borrar",
  "undoText": "Deshacer"
});

localize("argos._ConfigureBase", {
  "titleText": "Configurar"
});

localize("argos._DetailBase", {
  "editText": "Editar",
  "titleText": "Detalle",
  "detailsText": "Detalles",
  "loadingText": "cargando...",
  "notAvailableText": "La información solicitada no está disponible.",
  "toggleCollapseText": "contraer"
});

localize("argos._EditBase", {
  "saveText": "Guardar",
  "titleText": "Editar",
  "validationSummaryText": "Resumen Validación",
  "concurrencySummaryText": "Error(es) de Concurrencia",
  "detailsText": "Detalles",
  "loadingText": "cargando...",
  "errorText": {
    "general": "Ha ocurrido un error en el servidor mientras se estaba solicitando información.",
    "status": {
      "410": "Error salvando. Este registro ya no existe."
    }
  },
  "concurrencyErrorText": "Otro usuario actualizó esté campo."
});

localize("argos._ErrorHandleMixin", {
  "errorText": {
    "general": "Ha ocurrido un error en el servidor."
  }
});

localize("argos._ListBase", {
  "moreText": "Recuperar más registros",
  "emptySelectionText": "Ninguno",
  "titleText": "Lista",
  "configureText": "Configurar",
  "errorRenderText": "Error al mostrar la fila de la plantilla.",
  "remainingText": "${0} registros restantes",
  "cancelText": "Cancelar",
  "insertText": "Nuevo",
  "noDataText": "no hay registros",
  "loadingText": "cargando..."
});

localize("argos._PullToRefreshMixin", {
  "pullRefreshText": "Pulse para bajo para actualizar...",
  "pullReleaseText": "Liberación a refrescar..."
});

localize("argos._RelatedViewWidgetBase", {
  "loadingText": "cargando ... "
});

localize("crm.Action", {
  "calledText": "Llamado ${0}",
  "emailedText": "E-mail Enviado ${0}"
});

localize("crm.Application", {
  "versionInfoText": "Mobile v${0}.${1}.${2}",
  "loadingText": "Estado de carga de la aplicación",
  "authText": "Autenticando"
});

localize("crm.ApplicationModule", {
  "searchText": "Búsqueda"
});

localize("crm.DefaultMetrics", {
  "accountsText": {
    "totalRevenue": "Ingresos Totales",
    "averageTime": "Tiempo Promedio con Cliente",
    "total": "Total de Cuentas"
  },
  "opportunitiesText": {
    "total": "Total de Oportunidades",
    "potential": "Total Ventas Potenciales",
    "montlyPotential": "Promedio Mensual de Ventas Potenciales"
  },
  "ticketsText": {
    "total": "Total de Tickets",
    "averageOpen": "Promedio Tiempo Abierto"
  },
  "contactsText": {
    "total": "Total de Contactos"
  },
  "leadsText": {
    "total": "Total de Leads"
  },
  "historyText": {
    "total": "Total de Historial",
    "duration": "Duración Total"
  }
});

localize("crm.Fields.AddressField", {
  "lookupLabelText": "editar",
  "emptyText": ""
});

localize("crm.Fields.NameField", {
  "emptyText": ""
});

localize("crm.Fields.RecurrencesField", {
  "titleText": "Periodicidad",
  "emptyText": ""
});

localize("crm.FileManager", {
  "unableToUploadText": "Este navegador no soporta Archivos HTML5 API.",
  "unknownSizeText": "desconocido",
  "unknownErrorText": "Advertencia: Ha ocurrido un error y el archivo no se pudo cargar.",
  "largeFileWarningText": "Advertencia: Esta solicitud excede el tamaño límite configurado por su administrador y falló al cargar.",
  "percentCompleteText": "Cargando, por favor, espere..."
});

localize("crm.Format", {
  "bigNumberAbbrText": {
    "billion": "B",
    "million": "M",
    "thousand": "K"
  },
  "userActivityFormatText": {
    "asUnconfirmed": "Sin Confirmar",
    "asAccepted": "Aceptado",
    "asDeclned": "Declinado"
  }
});

localize("crm.SpeedSearchWidget", {
  "searchText": "SpeedSearch"
});

localize("crm.Validator", {
  "exists": {
    "message": "El campo '${2}' debe tener un valor."
  },
  "name": {
    "message": "El campo '${2}' debe tener un nombre y apellido especificado."
  },
  "notEmpty": {
    "message": "El campo '${2}' no puede ser vacío."
  },
  "hasText": {
    "test": "",
    "message": "El campo '${2}' debe contener algún texto."
  },
  "isInteger": {
    "message": "El valor '${0}' no es un número válido."
  },
  "isDecimal": {
    "message": "El valor '${0}' no es un número válido."
  },
  "isCurrency": {
    "message": "El valor '${0}' no es un valor de moneda válido."
  },
  "isInt32": {
    "message": "El valor del campo '${2}' excede el rango numérico permitido."
  },
  "exceedsMaxTextLength": {
    "message": "El valor del campo '${2}' excede el tamaño límite permitido."
  },
  "isDateInRange": {
    "message": "El valor del campo '${2}' está fuera del rango de fecha permitido."
  }
});

localize("crm.Views.Account.Detail", {
  "accountText": "cuenta",
  "acctMgrText": "gte. cta.",
  "addressText": "dirección",
  "businessDescriptionText": "desc. neg.",
  "createDateText": "fecha creación",
  "createUserText": "usuario creación",
  "faxText": "fax",
  "importSourceText": "lead origen",
  "industryText": "industria",
  "notesText": "notas",
  "ownerText": "propietario",
  "phoneText": "teléfono",
  "activityTypeText": {
    "atPhoneCall": "Llamada Telefónica"
  },
  "actionsText": "Acciones Rápidas",
  "relatedActivitiesText": "Actividades",
  "relatedContactsText": "Contactos",
  "relatedHistoriesText": "Notas/Historial",
  "relatedItemsText": "Ítems relacionados",
  "relatedNotesText": "Notas",
  "relatedOpportunitiesText": "Oportunidades",
  "relatedTicketsText": "Tickets",
  "relatedAddressesText": "Direcciones",
  "relatedAttachmentText": "Archivos Adjuntos",
  "relatedAttachmentTitleText": "Archivos Adjuntos de la Cuenta",
  "statusText": "estatus",
  "subTypeText": "subtipo",
  "titleText": "Cuenta",
  "typeText": "tipo",
  "webText": "pág. web",
  "scheduleActivityText": "Programar actividad",
  "addNoteText": "Adicionar nota",
  "moreDetailsText": "Más Detalles",
  "calledText": "Llamado ${0}"
});

localize("crm.Views.Account.Edit", {
  "accountStatusTitleText": "Estatus Cuenta",
  "accountSubTypeTitleText": "Subtipo Cuenta",
  "accountText": "cuenta",
  "accountTypeTitleText": "Tipo de Cuenta",
  "acctMgrText": "gte. cta.",
  "businessDescriptionText": "desc. neg.",
  "businessDescriptionTitleText": "Descripción del Negocio",
  "descriptionText": "desc.",
  "faxText": "fax",
  "fullAddressText": "dirección",
  "importSourceText": "lead origen",
  "industryText": "industria",
  "industryTitleText": "Industria",
  "ownerText": "propietario",
  "phoneText": "teléfono",
  "statusText": "estatus",
  "subTypeText": "subtipo",
  "titleText": "Cuenta",
  "typeText": "tipo",
  "webText": "pág. web"
});

localize("crm.Views.Account.List", {
  "titleText": "Cuentas",
  "activitiesText": "Actividades",
  "notesText": "Notas",
  "scheduleText": "Programar",
  "editActionText": "Editar",
  "callMainActionText": "Llamar al Principal",
  "viewContactsActionText": "Contactos",
  "addNoteActionText": "Adicionar Nota",
  "addActivityActionText": "Adicionar Actividad",
  "addAttachmentActionText": "Adicionar Archivo Adjunto",
  "phoneAbbreviationText": "Teléfono: ",
  "faxAbbreviationText": "Fax: "
});

localize("crm.Views.Activity.List", {
  "allDayText": "Sin Tiempo",
  "completeActivityText": "Completar",
  "callText": "Llamada",
  "calledText": "Llamado",
  "addAttachmentActionText": "Adicionar Archivo Adjunto",
  "overdueText": "vencidos",
  "alarmText": "alarma",
  "touchedText": "tocado",
  "importantText": "importante",
  "recurringText": "periodicidad",
  "activityTypeText": {
    "atToDo": "Tarea",
    "atPhoneCall": "Llamada Telefónica",
    "atAppointment": "Reunión",
    "atLiterature": "Solicitud de Doc.",
    "atPersonal": "Personal",
    "atQuestion": "Pregunta",
    "atNote": "Nota",
    "atEMail": "E-mail"
  },
  "titleText": "Actividades",
  "hashTagQueriesText": {
    "alarm": "alarma",
    "recurring": "periodicidad",
    "timeless": "sin-tiempo",
    "today": "hoy",
    "this-week": "está-semana",
    "yesterday": "ayer"
  }
});

localize("crm.Views.Activity.MyList", {
  "titleText": "Mis Actividades",
  "completeActivityText": "Completar",
  "acceptActivityText": "Aceptar",
  "declineActivityText": "Declinar",
  "callText": "Llamada",
  "calledText": "Llamado",
  "addAttachmentActionText": "Adicionar Archivo Adjunto",
  "viewContactActionText": "Contacto",
  "viewAccountActionText": "Cuenta",
  "viewOpportunityActionText": "Oportunidad",
  "hashTagQueriesText": {
    "alarm": "alarma",
    "status-unconfirmed": "estatus-sin-confirmar",
    "status-accepted": "estatus-aceptado",
    "status-declined": "estatus-declinado",
    "recurring": "periodicidad",
    "timeless": "sin-tiempo",
    "today": "hoy",
    "this-week": "está-semana",
    "yesterday": "ayer"
  }
});

localize("crm.Views.Activity.Recurring", {
  "startingText": "fecha inicio",
  "endingText": "fecha fin",
  "repeatsText": "repeticiones",
  "everyText": "cada",
  "afterCompletionText": "después de completado",
  "singleWeekdayText": "día laboral",
  "weekdaysText": "día(s) laboral(es)",
  "dayText": "día",
  "monthText": "mes",
  "onText": "en",
  "occurrencesText": "ocurrencias",
  "summaryText": "resumen",
  "weekDaysText": {
    "0": "Domingo",
    "1": "Lunes",
    "2": "Martes",
    "3": "Miércoles",
    "4": "Jueves",
    "5": "Viernes",
    "6": "Sábado"
  },
  "monthsText": {
    "0": "Enero",
    "1": "Febrero",
    "2": "Marzo",
    "3": "Abril",
    "4": "Mayo",
    "5": "Junio",
    "6": "Julio",
    "7": "Agosto",
    "8": "Septiembre",
    "9": "Octubre",
    "10": "Noviembre",
    "11": "Diciembre"
  },
  "frequencyOptionsText": {
    "0": "días",
    "1": "semanas",
    "2": "meses",
    "3": "años"
  },
  "recurringFrequencyText": "Frecuencia Recurrente",
  "yesText": "Si",
  "noText": "No",
  "titleText": "Recurrencia"
});

localize("crm.Views.Activity.TypesList", {
  "titleText": "Programar...",
  "activityTypeText": {
    "atToDo": "Tarea",
    "atPhoneCall": "Llamada Telefónica",
    "atAppointment": "Reunión",
    "atLiterature": "Solicitud de Literatura",
    "atPersonal": "Actividad Personal",
    "event": "Evento"
  }
});

localize("crm.Views.AddAccountContact", {
  "accountNameText": "cuenta",
  "accountStatusTitleText": "Estatus Cuenta",
  "accountSubTypeTitleText": "Subtipo Cuenta",
  "accountText": "Cuenta",
  "accountTypeTitleText": "Tipo de Cuenta",
  "acctMgrText": "gte. cta.",
  "addressText": "dirección",
  "contactTitleText": "cargo",
  "descriptionText": "descripción",
  "detailsAccountText": "Información Cuenta",
  "detailsContactText": "Información Contacto",
  "detailsText": "Información Contacto / Cuenta",
  "emailText": "e-mail",
  "faxText": "fax",
  "homePhoneText": "teléfono casa",
  "industryText": "industria",
  "ownerText": "propietario",
  "lastNameText": "último",
  "mobileText": "celular",
  "nameText": "nombre",
  "statusText": "estatus",
  "subTypeText": "sub-tipo",
  "titleText": "Adicionar Cuenta / Contacto",
  "typeText": "tipo",
  "webText": "pág. web",
  "phoneText": "teléfono",
  "workText": "teléfono trabajo",
  "industryTitleText": "Industria"
});

localize("crm.Views.Address.Edit", {
  "address1Text": "dirección 1",
  "address2Text": "dirección 2",
  "address3Text": "dirección 3",
  "cityText": "ciudad",
  "cityTitleText": "ciudad",
  "countryText": "país",
  "countryTitleText": "País",
  "descriptionText": "descripción",
  "descriptionTitleText": "Descripción",
  "isMailingText": "envío",
  "isPrimaryText": "principal",
  "postalCodeText": "postal",
  "salutationText": "atención",
  "stateText": "estado",
  "stateTitleText": "Estado",
  "titleText": "Dirección"
});

localize("crm.Views.Address.List", {
  "titleText": "Direcciones"
});

localize("crm.Views.AreaCategoryIssueLookup", {
  "titleText": "Cuentas"
});

localize("crm.Views.Attachment.AddAttachment", {
  "titleText": "Adicionar Archivos Adjuntos"
});

localize("crm.Views.Attachment.MyAttachmentList", {
  "titleText": "Mis Archivos Adjuntos"
});

localize("crm.Views.Charts.GenericBar", {
  "titleText": ""
});

localize("crm.Views.Charts.GenericLine", {
  "titleText": ""
});

localize("crm.Views.Charts.GenericPie", {
  "titleText": ""
});

localize("crm.Views.Charts._ChartMixin", {
  "loadingText": "cargando..."
});

localize("crm.Views.Competitor.List", {
  "titleText": "Competidores"
});

localize("crm.Views.Configure", {
  "titleText": "Configurar"
});

localize("crm.Views.Contact.Detail", {
  "activityTypeText": {
    "atPhoneCall": "Llamada Telefónica",
    "atEMail": "E-mail"
  },
  "accountText": "cuenta",
  "acctMgrText": "gte. cta.",
  "addressText": "dirección",
  "contactTitleText": "cargo",
  "createDateText": "fecha creación",
  "createUserText": "usuario creación",
  "emailText": "e-mail",
  "faxText": "fax",
  "homeText": "teléfono casa",
  "nameText": "contacto",
  "ownerText": "propietario",
  "actionsText": "Acciones Rápidas",
  "relatedAccountsText": "Cuentas",
  "relatedActivitiesText": "Actividades",
  "relatedHistoriesText": "Notas/Historial",
  "relatedItemsText": "Ítems relacionados",
  "relatedNotesText": "Notas",
  "relatedOpportunitiesText": "Oportunidades",
  "relatedTicketsText": "Tickets",
  "relatedAddressesText": "Direcciones",
  "relatedAttachmentText": "Archivos Adjuntos",
  "relatedAttachmentTitleText": "Archivos Adjuntos del Contacto",
  "titleText": "Contacto",
  "webText": "pág. web",
  "workText": "teléfono trabajo",
  "cuisinePreferenceText": "cocina",
  "callMobileNumberText": "Llamar a Celular",
  "callWorkNumberText": "Llamada de trabajo",
  "calledText": "Llamado",
  "scheduleActivityText": "Programar actividad",
  "addNoteText": "Adicionar nota",
  "sendEmailText": "Enviar E-mail",
  "viewAddressText": "Ver dirección",
  "moreDetailsText": "Más Detalles"
});

localize("crm.Views.Contact.Edit", {
  "titleText": "Contacto",
  "nameText": "nombre",
  "workText": "teléfono trabajo",
  "mobileText": "teléfono celular",
  "emailText": "e-mail",
  "webText": "pág. web",
  "acctMgrText": "gte. cta.",
  "accountNameText": "cuenta",
  "homePhoneText": "teléfono casa",
  "faxText": "fax",
  "addressText": "dirección",
  "contactTitleText": "cargo",
  "titleTitleText": "cargo",
  "addressTitleText": "Dirección",
  "ownerText": "propietario",
  "cuisinePreferenceText": "cocina",
  "cuisinePreferenceTitleText": "Cocina"
});

localize("crm.Views.Contact.List", {
  "titleText": "Contactos",
  "activitiesText": "Actividades",
  "notesText": "Notas",
  "scheduleText": "Programar",
  "editActionText": "Editar",
  "callMainActionText": "Llamar al Principal",
  "callWorkActionText": "Llamar al Trabajo",
  "callMobileActionText": "Llamar a Celular",
  "sendEmailActionText": "E-mail",
  "viewAccountActionText": "Cuenta",
  "addNoteActionText": "Adicionar Nota",
  "addActivityActionText": "Adicionar Actividad",
  "addAttachmentActionText": "Adicionar Archivo Adjunto",
  "phoneAbbreviationText": "Trabajo: ",
  "mobileAbbreviationText": "Celular: "
});

localize("crm.Views.Contract.List", {
  "titleText": "Contratos"
});

localize("crm.Views.ExchangeRateLookup", {
  "titleText": "Tasas de Cambio"
});

localize("crm.Views.FooterToolbar", {
  "copyrightText": "&copy; 2014 SalesLogix, NA, LLC. Todos los derechos reservados."
});

localize("crm.Views.Groups.Selector", {
  "titleText": "Búsqueda de Grupos"
});

localize("crm.Views.Help", {
  "titleText": "Ayuda",
  "errorText": "Error",
  "errorMessageText": "No se puede cargar el documento de ayuda."
});

localize("crm.Views.History.RelatedView", {
  "regardingText": "Asunto",
  "byText": "escribió ",
  "titleText": "Notas"
});

localize("crm.Views.Home", {
  "configureText": "Configurar",
  "addAccountContactText": "Adicionar Cuenta/Contacto",
  "titleText": "Inicio",
  "actionsText": "Acciones Rápidas",
  "viewsText": "Ir A"
});

localize("crm.Views.Lead.Detail", {
  "activityTypeText": {
    "atPhoneCall": "Llamada Telefónica",
    "atEMail": "E-mail"
  },
  "accountText": "compañía",
  "addressText": "dirección",
  "businessDescriptionText": "desc. neg.",
  "createDateText": "fecha creación",
  "createUserText": "usuario creación",
  "eMailText": "e-mail",
  "leadSourceText": "lead origen",
  "industryText": "industria",
  "interestsText": "intereses",
  "leadTitleText": "cargo",
  "nameText": "nombre",
  "notesText": "comentarios",
  "ownerText": "propietario",
  "relatedActivitiesText": "Actividades",
  "relatedHistoriesText": "Notas/Historial",
  "relatedItemsText": "Ítems relacionados",
  "relatedNotesText": "Notas",
  "relatedAttachmentText": "Archivos Adjuntos",
  "relatedAttachmentTitleText": "Archivos Adjuntos del Lead",
  "sicCodeText": "código sic",
  "titleText": "Lead",
  "tollFreeText": "número gratuito",
  "mobileText": "teléfono celular",
  "webText": "pág. web",
  "workText": "teléfono trabajo",
  "actionsText": "Acciones Rápidas",
  "callWorkNumberText": "Llamar al número principal",
  "scheduleActivityText": "Programar actividad",
  "addNoteText": "Adicionar nota",
  "sendEmailText": "Enviar E-mail",
  "viewAddressText": "Ver dirección",
  "moreDetailsText": "Más Detalles",
  "calledText": "Llamado ${0}",
  "emailedText": "E-mail Enviado ${0}"
});

localize("crm.Views.Lead.Edit", {
  "accountText": "cuenta",
  "addressText": "dirección",
  "businessText": "desc. neg.",
  "businessTitleText": "Descripción del Negocio",
  "companyText": "compañía",
  "contactTitleText": "cargo",
  "emailText": "e-mail",
  "faxText": "fax",
  "importSourceText": "lead origen",
  "industryText": "industria",
  "industryTitleText": "Industria",
  "interestsText": "intereses",
  "leadNameLastFirstText": "nombre",
  "leadOwnerText": "propietario",
  "nameText": "nombre",
  "notesText": "comentarios",
  "notesTitleText": "Comentarios",
  "sicCodeText": "código sic",
  "titleText": "Lead",
  "titleTitleText": "cargo",
  "tollFreeText": "número gratuito",
  "webText": "pág. web",
  "workText": "teléfono trabajo",
  "mobileText": "teléfono celular"
});

localize("crm.Views.Lead.List", {
  "titleText": "Leads",
  "activitiesText": "Actividades",
  "notesText": "Notas",
  "scheduleText": "Programar",
  "emailedText": "E-mail Enviado ${0}",
  "calledText": "Llamado ${0}",
  "editActionText": "Editar",
  "callMobileActionText": "Llamar a Celular",
  "callWorkActionText": "Llamar al Trabajo",
  "sendEmailActionText": "E-mail",
  "addNoteActionText": "Adicionar Nota",
  "addActivityActionText": "Adicionar Actividad",
  "addAttachmentActionText": "Adicionar Archivo Adjunto",
  "phoneAbbreviationText": "Trabajo: ",
  "mobileAbbreviationText": "Celular: ",
  "tollFreeAbbreviationText": "Número Gratuito: "
});

localize("crm.Views.LeadSource.List", {
  "titleText": "Orígenes Lead"
});

localize("crm.Views.LeftDrawer", {
  "configureText": "Configurar Menú",
  "addAccountContactText": "Adicionar Cuenta/Contacto",
  "titleText": "Menú Principal",
  "actionsText": "Acciones Rápidas",
  "viewsText": "Ir A",
  "footerText": "Otro",
  "settingsText": "Configuraciones",
  "helpText": "Ayuda",
  "logOutText": "Cerrar Sesión",
  "logOutConfirmText": "¿Está seguro que quiere cerrar sesión?"
});

localize("crm.Views.LogOff", {
  "messageText": "Se cerró la sesión. Por favor, cierre la ventana del navegador.",
  "loginText": "Hacer clic aquí para volver a iniciar sesión.",
  "titleText": "Cerrar Sesión"
});

localize("crm.Views.Login", {
  "copyrightText": "Derechos de autor &copy; 2015 Infor. Todos los derechos reservados. www.infor.com",
  "logOnText": "Ingresar",
  "passText": "Contraseña",
  "rememberText": "Recordarme",
  "titleText": "Ingresar",
  "userText": "ID Usuario",
  "invalidUserText": "El nombre de usuario o la contraseña es inválida.",
  "missingUserText": "El registro de usuario no fue encontrado.",
  "requestAbortedText": "La solicitud fue anulada.",
  "logoText": "Infor CRM"
});

localize("crm.Views.MetricConfigure", {
  "titleText": "Configurar Métrica",
  "metricTitleText": "cargo",
  "metricFilterText": "filtro",
  "metricText": "métrica",
  "chartTypeText": "tipo de gráfico",
  "advancedText": "opciones avanzadas",
  "formatterText": "formateador",
  "aggregateText": "agregar",
  "reportViewText": "id vista gráfico"
});

localize("crm.Views.MetricFilterLookup", {
  "titleText": "Búsqueda de Filtro/Métrica"
});

localize("crm.Views.MetricWidget", {
  "loadingText": "cargando...",
  "errorText": "Error cargando el complemento."
});

localize("crm.Views.NameEdit", {
  "titleText": "Editar Nombre",
  "firstNameText": "primero",
  "middleNameText": "medio",
  "lastNameText": "último",
  "prefixText": "prefijo",
  "prefixTitleText": "Prefijo Nombre",
  "suffixText": "sufijo",
  "suffixTitleText": "Sufijo del Nombre"
});

localize("crm.Views.Opportunity.List", {
  "titleText": "Oportunidades",
  "activitiesText": "Actividades",
  "notesText": "Notas",
  "scheduleText": "Programar",
  "editActionText": "Editar",
  "viewAccountActionText": "Cuenta",
  "viewContactsActionText": "Contactos",
  "viewProductsActionText": "Productos",
  "addNoteActionText": "Adicionar Nota",
  "addActivityActionText": "Adicionar Actividad",
  "addAttachmentActionText": "Adicionar Archivo Adjunto",
  "actualCloseText": "Cerrado ",
  "estimatedCloseText": "Cierre Estimado ",
  "quickEditActionText": "Edición Rápida"
});

localize("crm.Views.Opportunity.QuickEdit", {
  "estCloseText": "cierre estimado",
  "detailsText": "Detalles",
  "opportunityStageTitleText": "Etapa de la Oportunidad",
  "opportunityText": "oportunidad",
  "stageText": "etapa",
  "statusOpenText": "Abrir",
  "statusClosedLostText": "Cerrada - Perdida",
  "statusClosedWonText": "Cerrada - Ganada",
  "salesProcessText": "Etapa bloqueada por el proceso de ventas:",
  "probabilityText": "prob. cierre",
  "probabilityTitleText": "Probabilidad de la Oportunidad",
  "potentialText": "potencial de ventas"
});

localize("crm.Views.OpportunityContact.Detail", {
  "titleText": "Contacto de la Oportunidad",
  "accountText": "cuenta",
  "contactTitleText": "cargo",
  "nameText": "contacto",
  "moreDetailsText": "Más Detalles",
  "salesRoleText": "rol",
  "strategyText": "estrategia",
  "personalBenefitsText": "benef. personal",
  "standingText": "posición",
  "issuesText": "problemas",
  "competitorNameText": "pref. competidor",
  "removeContactTitleText": "Remover Contacto",
  "confirmDeleteText": "¿Remover \"${0}\" de la oportunidad?",
  "contactText": "Contacto"
});

localize("crm.Views.OpportunityContact.Edit", {
  "titleText": "Editar Contacto de la Oportunidad",
  "nameText": "nombre",
  "accountNameText": "cuenta",
  "contactTitleText": "cargo",
  "salesRoleText": "rol",
  "salesRoleTitleText": "Rol",
  "personalBenefitsText": "benef. personal",
  "strategyText": "estrategia",
  "issuesText": "problemas",
  "standingText": "posición",
  "standingTitleText": "Posición",
  "contactText": "Contacto",
  "competitorPrefText": "pref. competidor"
});

localize("crm.Views.OpportunityContact.List", {
  "titleText": "Contactos de la Oportunidad",
  "selectTitleText": "Seleccionar Contacto",
  "activitiesText": "Actividades",
  "notesText": "Notas",
  "scheduleText": "Programar"
});

localize("crm.Views.OpportunityProduct.Detail", {
  "detailsText": "Detalles",
  "opportunityText": "oportunidad",
  "productText": "producto",
  "productFamilyText": "familia producto",
  "priceLevelText": "nivel de precio",
  "priceText": "precio",
  "basePriceText": "precio base",
  "discountText": "descuento",
  "quantityText": "cantidad",
  "baseExtendedPriceText": "base",
  "extendedPriceText": "precio ampliado",
  "extendedPriceSectionText": "Precio Ampliado",
  "adjustedPriceSectionText": "Precio Ajustado",
  "baseAdjustedPriceText": "base",
  "adjustedPriceText": "precio ajustado",
  "myAdjustedPriceText": "usuario",
  "confirmDeleteText": "¿Remover ${0} de los productos de la oportunidad?",
  "removeOppProductTitleText": "remover producto de la oportunidad"
});

localize("crm.Views.OpportunityProduct.Edit", {
  "titleText": "Producto de la Oportunidad",
  "detailsText": "Detalles",
  "opportunityText": "oportunidad",
  "productText": "producto",
  "productFamilyText": "familia producto",
  "priceLevelText": "nivel de precio",
  "priceText": "precio",
  "basePriceText": "precio base",
  "discountText": "descuento %",
  "adjustedPriceText": "precio ajustado",
  "myAdjustedPriceText": "usuario",
  "baseAdjustedPriceText": "base",
  "quantityText": "cantidad",
  "baseExtendedPriceText": "base",
  "extendedPriceText": "precio ampliado",
  "extendedPriceSectionText": "Precio Ampliado",
  "adjustedPriceSectionText": "Precio Ajustado"
});

localize("crm.Views.OpportunityProduct.List", {
  "titleText": "Productos"
});

localize("crm.Views.Owner.List", {
  "titleText": "Propietarios"
});

localize("crm.Views.Product.List", {
  "titleText": "Productos"
});

localize("crm.Views.ProductProgram.List", {
  "titleText": "Programas de Producto"
});

localize("crm.Views.Settings", {
  "clearLocalStorageTitleText": "Borrar Memoria",
  "clearAuthenticationTitleText": "Borrar Credenciales Guardadas",
  "errorLogTitleText": "Ver Registros de Error",
  "localStorageClearedText": "El almacenamiento local fue borrado correctamente.",
  "credentialsClearedText": "Credenciales guardadas se borraron satisfactoriamente.",
  "titleText": "Configuraciones"
});

localize("crm.Views.SpeedSearchList", {
  "titleText": "SpeedSearch",
  "indexesText": {
    "Account": "Cuenta",
    "Activity": "Actividad",
    "Contact": "Contacto",
    "History": "Historial",
    "Lead": "Lead",
    "Opportunity": "Oportunidad",
    "Ticket": "Ticket"
  }
});

localize("crm.Views.TextEdit", {
  "titleText": "Editar Texto"
});

localize("crm.Views.Ticket.Detail", {
  "accountText": "cuenta",
  "areaText": "área",
  "assignedDateText": "fecha asignada",
  "assignedToText": "asignado a",
  "completedByText": "completado por",
  "categoryText": "categoría",
  "contactText": "contacto",
  "contractText": "contrato",
  "descriptionText": "desc.",
  "issueText": "problema",
  "needByText": "fecha necesaria",
  "notesText": "comentarios",
  "phoneText": "teléfono",
  "actionsText": "Acciones Rápidas",
  "relatedAttachmentText": "Archivos Adjuntos",
  "relatedAttachmentTitleText": "Archivos Adjuntos del Ticket",
  "relatedActivitiesText": "Actividades",
  "relatedItemsText": "Ítems relacionados",
  "resolutionText": "resolución",
  "sourceText": "origen",
  "statusText": "estatus",
  "subjectText": "asunto",
  "ticketIdText": "número ticket",
  "titleText": "Ticket",
  "urgencyText": "urgencia",
  "scheduleActivityText": "Programar actividad",
  "moreDetailsText": "Más Detalles",
  "relatedTicketActivitiesText": "Actividades del Ticket",
  "loadingText": "cargando..."
});

localize("crm.Views.Ticket.Edit", {
  "accountText": "cta.",
  "areaText": "área",
  "assignedDateText": "fecha asignada",
  "assignedToText": "asignado a",
  "categoryText": "categoría",
  "contactText": "contacto",
  "contractText": "contrato",
  "descriptionText": "desc.",
  "descriptionTitleText": "Descripción",
  "issueText": "problema",
  "needByText": "fecha necesaria",
  "notesText": "comentarios",
  "notesTitleText": "Comentarios",
  "phoneText": "teléfono",
  "relatedActivitiesText": "Actividades",
  "relatedItemsText": "Ítems relacionados",
  "resolutionText": "resolución",
  "resolutionTitleText": "Resolución",
  "sourceText": "origen",
  "sourceTitleText": "Origen",
  "statusText": "estatus",
  "subjectText": "asunto",
  "ticketAreaTitleText": "Área Ticket",
  "ticketCategoryTitleText": "Categoría del Ticket",
  "ticketIdText": "número ticket",
  "ticketIssueTitleText": "Problema del Ticket",
  "ticketStatusTitleText": "Estatus Ticket",
  "ticketUrgencyTitleText": "Urgencia Ticket",
  "titleText": "Ticket",
  "urgencyText": "urgencia"
});

localize("crm.Views.Ticket.List", {
  "titleText": "Tickets",
  "activitiesText": "Actividades",
  "scheduleText": "Programar",
  "notAssignedText": "No asignado",
  "editActionText": "Editar",
  "viewAccountActionText": "Cuenta",
  "viewContactActionText": "Contacto",
  "addNoteActionText": "Adicionar Nota",
  "addActivityActionText": "Adicionar Actividad",
  "addAttachmentActionText": "Adicionar Archivo Adjunto",
  "assignedToText": "Asignado A: ",
  "urgencyText": "Urgencia: ",
  "createdOnText": "Creado  ",
  "modifiedText": "Modificado ",
  "neededByText": "Necesario  "
});

localize("crm.Views.Ticket.UrgencyLookup", {
  "titleText": "Urgencia Ticket"
});

localize("crm.Views.TicketActivity.Detail", {
  "titleText": "Actividad del Ticket",
  "accountText": "cuenta",
  "contactText": "contacto",
  "typeText": "tipo",
  "publicAccessText": "acceso público",
  "assignedDateText": "fecha inicio",
  "completedDateText": "fecha fin",
  "followUpText": "seguimiento",
  "unitsText": "unidades de tiempo",
  "elapsedUnitsText": "horas transcurridas",
  "rateTypeDescriptionText": "tipo de cargo",
  "rateText": "tasa",
  "totalLaborText": "total trabajo",
  "totalPartsText": "total partes",
  "totalFeeText": "total honorarios",
  "activityDescriptionText": "comentarios",
  "ticketNumberText": "número ticket",
  "userText": "usuario",
  "completeTicketText": "Completar Actividad del Ticket",
  "moreDetailsText": "Más Detalles",
  "relatedItemsText": "Ítems relacionados",
  "relatedTicketActivityItemText": "Partes Actividad Ticket"
});

localize("crm.Views.TicketActivity.RateLookup", {
  "titleText": "Tasas"
});

localize("crm.Views.TicketActivityItem.Detail", {
  "titleText": "Parte Actividad Ticket",
  "productNameText": "producto",
  "skuText": "SKU",
  "serialNumberText": "Nº de serie",
  "itemAmountText": "precio",
  "itemDescriptionText": "descripción"
});

localize("crm.Views.TicketActivityItem.List", {
  "titleText": "Partes Actividad Ticket"
});

localize("crm.Views.UpdateToolbar", {
  "updateText": "Una actualización está disponible. Hacer clic para recargar."
});

localize("crm.Views.User.CalendarAccessList", {
  "titleText": "Recursos de la Actividad"
});

localize("crm.Views.User.List", {
  "titleText": "Usuarios"
});

localize("crm.Views._CardLayoutListMixin", {
  "itemIconAltText": "Contacto",
  "allRecordsText": "ninguna búsqueda aplicada"
});

localize("crm.Views._GroupListMixin", {
  "noDefaultGroupText": "No existe un grupo configurado por defecto. Hacer clic aquí para configurar los grupos.",
  "currentGroupNotFoundText": "El grupo actual no fue encontrado.",
  "groupTemplateSummaryText": "Resumen",
  "groupTemplateDetailText": "Detalle",
  "groupsModeText": "Actualmente está en modo de grupos. Realice una búsqueda o haga clic en una etiqueta para salir del modo de grupos."
});

localize("crm.Views._RightDrawerListMixin", {
  "hashTagsSectionText": "Etiquetas",
  "groupsSectionText": "Grupos",
  "kpiSectionText": "KPI",
  "configureGroupsText": "Configurar",
  "refreshGroupsText": "Refrescar",
  "layoutsText": "Diseñador"
});

localize("crm.Views._SpeedSearchRightDrawerListMixin", {
  "indexSectionText": "Índices"
});
});