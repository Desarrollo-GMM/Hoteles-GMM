import enum

class EnumProfileSSO(str, enum.Enum):
    ADMIN_UT = "Archivo" # SSO-ID_LOCAL 11
    MESA_ENTRADA = "Mesa de entrada" # SSO-ID_LOCAL 12
    RESP_VOBO = "Responsable de vobo" # SSO-ID_LOCAL 13   #! Test sin que exista este perfil...